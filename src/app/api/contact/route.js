import { NextResponse } from 'next/server'
import { createClient } from 'contentful-management'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())

    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN
    const environmentId = process.env.CONTENTFUL_ENVIRONMENT || 'master'

    if (!spaceId || !accessToken) {
      console.error('Missing Contentful env vars: CONTENTFUL_SPACE_ID or CONTENTFUL_MANAGEMENT_TOKEN')
      // Still redirect so user sees thanks; entry just won't be saved in dev without creds
      return NextResponse.redirect(new URL('/thanks', request.url))
    }

    const client = createClient({ accessToken })

    const space = await client.getSpace(spaceId)
    const environment = await space.getEnvironment(environmentId)

    const entry = await environment.createEntry('contactInquiry', {
      fields: {
        title: {
          'en-US': [
            data.firstName,
            data.lastName,
            data.nameOfCompany ? `- ${data.nameOfCompany}` : '',
          ]
            .filter(Boolean)
            .join(' ')
            .trim() || 'Contact Inquiry',
        },
        firstName: { 'en-US': data.firstName || '' },
        lastName: { 'en-US': data.lastName || '' },
        email: { 'en-US': data.email || '' },
        contactNumber: { 'en-US': data.contactNumber || '' },
        socialMediaHandles: { 'en-US': data.socialMediaHandles || '' },
        nameOfCompany: { 'en-US': data.nameOfCompany || '' },
        phaseOfProject: { 'en-US': data.phaseOfProject || '' },
        aboutYourProject: { 'en-US': data.aboutYourProject || '' },
        website: { 'en-US': data.website || '' },
        submittedAt: { 'en-US': new Date().toISOString() },
      },
    })

    await entry.publish()

    return NextResponse.redirect(new URL('/thanks', request.url))
  } catch (error) {
    console.error('Failed to save contact form to Contentful:', error)
    // Redirect to thanks anyway (or could redirect to /contact?submitted=error)
    return NextResponse.redirect(new URL('/thanks', request.url))
  }
}
