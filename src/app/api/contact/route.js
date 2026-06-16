import { NextResponse } from 'next/server'
import { createClient } from 'contentful-management'
import { log, ERROR_TYPE, LOG_TYPE, serializeError, phaseEntry } from '@/lib/logger'

export async function POST(request) {
  const start = Date.now()
  const subLog = log.child({
    route: '/api/contact',
    method: 'POST',
  })

  // Safe summary for telemetry (avoid dumping full PII)
  let formSummary = {}
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())

    formSummary = {
      hasFirstName: !!data.firstName,
      hasLastName: !!data.lastName,
      emailDomain: (data.email || '').split('@')[1] || null,
      hasContactNumber: !!data.contactNumber,
      hasSocial: !!data.socialMediaHandles,
      companyLen: (data.nameOfCompany || '').length,
      projectPhase: data.phaseOfProject || null,
      aboutLen: (data.aboutYourProject || '').length,
      hasWebsite: !!data.website,
    }

    subLog.info(
      { ...phaseEntry(LOG_TYPE.FORM_RECEIVED), form: formSummary },
      'contact form submission received'
    )

    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN
    const environmentId = process.env.CONTENTFUL_ENVIRONMENT || 'master'
    const contentTypeId = process.env.CONTENTFUL_CONTACT_CONTENT_TYPE || 'actaiApplication'

    if (!spaceId || !accessToken) {
      subLog.error(
        {
          type: ERROR_TYPE.CONFIG_ERROR,
          functionName: 'POST /api/contact',
          ...phaseEntry(LOG_TYPE.CONFIG_ERROR),
          missing: {
            spaceId: !spaceId,
            accessToken: !accessToken,
          },
        },
        'Missing Contentful env vars — submission will not be persisted'
      )
      // Still redirect so user sees thanks; entry just won't be saved without creds
      return NextResponse.redirect(new URL('/thanks', request.url), 303)
    }

    let client
    try {
      client = createClient(
        { accessToken },
        {
          defaults: {
            spaceId,
            environmentId,
          },
        }
      )
      subLog.info(
        { ...phaseEntry(LOG_TYPE.CONTENTFUL_INIT), environmentId },
        'Contentful management client initialized'
      )
    } catch (err) {
      const errInfo = serializeError(err, 'POST /api/contact.createClient')
      subLog.error(
        {
          type: ERROR_TYPE.CONTENTFUL_CLIENT_ERROR,
          functionName: 'POST /api/contact',
          ...phaseEntry(LOG_TYPE.CONTENTFUL_CLIENT_ERROR),
          err: errInfo,
        },
        'Failed to initialize Contentful client'
      )
      return NextResponse.redirect(new URL('/thanks', request.url), 303)
    }

    let entry
    try {
      subLog.info(
        { ...phaseEntry(LOG_TYPE.CONTENTFUL_CREATE_START), contentTypeId },
        'creating entry'
      )

      entry = await client.entry.create(
        {
          contentTypeId,
        },
        {
          fields: {
            firstName: { 'en-US': data.firstName || '' },
            lastName: { 'en-US': data.lastName || '' },
            email: { 'en-US': data.email || '' },
            contactNumber: { 'en-US': data.contactNumber || '' },
            socialMediaHandles: { 'en-US': data.socialMediaHandles || '' },
            nameOfCompany: { 'en-US': data.nameOfCompany || '' },
            phaseOfProject: { 'en-US': data.phaseOfProject || '' },
            aboutYourProject: { 'en-US': data.aboutYourProject || '' },
            website: { 'en-US': data.website || '' },
          },
        }
      )

      subLog.info(
        {
          ...phaseEntry(LOG_TYPE.CONTENTFUL_CREATE_SUCCESS),
          entryId: entry.sys?.id,
          contentTypeId,
        },
        'entry created'
      )
    } catch (err) {
      const errInfo = serializeError(err, 'POST /api/contact.entry.create')
      subLog.error(
        {
          type: ERROR_TYPE.CONTENTFUL_CREATE_ERROR,
          functionName: 'POST /api/contact',
          ...phaseEntry(LOG_TYPE.CONTENTFUL_CREATE_ERROR),
          err: errInfo,
          form: formSummary,
        },
        'Failed to create Contentful entry'
      )
      return NextResponse.redirect(new URL('/thanks', request.url), 303)
    }

    try {
      subLog.info(
        { ...phaseEntry(LOG_TYPE.CONTENTFUL_PUBLISH_START), entryId: entry.sys?.id },
        'publishing entry'
      )

      await client.entry.publish(
        { entryId: entry.sys.id },
        entry
      )

      subLog.info(
        {
          ...phaseEntry(LOG_TYPE.CONTENTFUL_PUBLISH_SUCCESS),
          entryId: entry.sys?.id,
        },
        'entry published successfully'
      )
    } catch (err) {
      const errInfo = serializeError(err, 'POST /api/contact.entry.publish')
      subLog.error(
        {
          type: ERROR_TYPE.CONTENTFUL_PUBLISH_ERROR,
          functionName: 'POST /api/contact',
          ...phaseEntry(LOG_TYPE.CONTENTFUL_PUBLISH_ERROR),
          err: errInfo,
          entryId: entry.sys?.id,
        },
        'Failed to publish Contentful entry (entry may be in draft)'
      )
      // Still treat as "submitted from user perspective"
      return NextResponse.redirect(new URL('/thanks', request.url), 303)
    }

    const durationMs = Date.now() - start
    subLog.info(
      {
        ...phaseEntry(LOG_TYPE.SUBMISSION_SUCCESS),
        durationMs,
        entryId: entry.sys?.id,
      },
      'contact form submission completed successfully'
    )

    return NextResponse.redirect(new URL('/thanks', request.url), 303)
  } catch (error) {
    const errInfo = serializeError(error, 'POST /api/contact')
    subLog.error(
      {
        type: ERROR_TYPE.SUBMISSION_FAILED,
        functionName: 'POST /api/contact',
        err: errInfo,
      },
      'Unhandled error during contact form submission'
    )
    // Redirect to thanks anyway (or could redirect to /contact?submitted=error)
    return NextResponse.redirect(new URL('/thanks', request.url), 303)
  }
}
