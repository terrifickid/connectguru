import pino from 'pino';

/**
 * ERROR_TYPE and LOG_TYPE constants.
 * Use for every log to categorize success/error steps explicitly.
 * Follows the pattern from terrifickid/glits (log-example.js style) for strong diagnostics.
 * Adapted for Next.js / Vercel form submission telemetry.
 */
export const ERROR_TYPE = {
  // Process errors
  UNCAUGHT_EXCEPTION: 'UNCAUGHT_EXCEPTION',
  UNHANDLED_REJECTION: 'UNHANDLED_REJECTION',
  FORM_PARSE_ERROR: 'FORM_PARSE_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  CONFIG_ERROR: 'CONFIG_ERROR',           // missing env / creds
  CONTENTFUL_CLIENT_ERROR: 'CONTENTFUL_CLIENT_ERROR',
  CONTENTFUL_CREATE_ERROR: 'CONTENTFUL_CREATE_ERROR',
  CONTENTFUL_PUBLISH_ERROR: 'CONTENTFUL_PUBLISH_ERROR',
  SUBMISSION_FAILED: 'SUBMISSION_FAILED',
};

export const LOG_TYPE = {
  // Success process steps (phases)
  FORM_RECEIVED: 'FORM_RECEIVED',
  FORM_PARSED: 'FORM_PARSED',
  CONTENTFUL_INIT: 'CONTENTFUL_INIT',
  CONTENTFUL_CREATE_START: 'CONTENTFUL_CREATE_START',
  CONTENTFUL_CREATE_SUCCESS: 'CONTENTFUL_CREATE_SUCCESS',
  CONTENTFUL_PUBLISH_START: 'CONTENTFUL_PUBLISH_START',
  CONTENTFUL_PUBLISH_SUCCESS: 'CONTENTFUL_PUBLISH_SUCCESS',
  SUBMISSION_SUCCESS: 'SUBMISSION_SUCCESS',

  // Errors also appear here for completeness
  ...ERROR_TYPE,
};

/**
 * Serialize error with full details for diagnostic output.
 * Includes function name context when passed.
 * Matches glits serializeError closely.
 */
export function serializeError(err, functionName = null) {
  if (!err || typeof err !== 'object') {
    return { message: String(err), functionName };
  }
  const out = {
    message: err.message,
    name: err.name,
    stack: err.stack,
    code: err.code,
    functionName,
  };
  for (const key of ['status', 'statusCode', 'statusText', 'response', 'data', 'body', 'headers', 'cause']) {
    if (err[key] !== undefined) out[key] = err[key];
  }
  if (err.response?.data !== undefined) out.responseData = err.response.data;
  if (err.response?.status !== undefined) out.responseStatus = err.response.status;
  return out;
}

/**
 * Create pino logger for Next.js on Vercel (or local).
 * Emphasizes functionName, phases, rich context objects.
 * Structured JSON output (Vercel ingests this well).
 * Use LOG_LEVEL=debug|info|error env var.
 *
 * Pattern (from glits):
 *   const log = createLogger();
 *   const stepLog = log.child({ functionName: 'POST /api/contact', phase: '...' });
 *   stepLog.info({ emailDomain: 'example.com', companyLen: 12 }, 'form received');
 *   stepLog.error({ type: ERROR_TYPE.CONTENTFUL_CREATE_ERROR, err: serializeError(err) }, 'failed to create entry');
 */
export function createLogger(overrides = {}) {
  const service = process.env.SERVICE_NAME || 'connectguru-contact';
  const version = process.env.SERVICE_VERSION || '0.1.0';
  const level = process.env.LOG_LEVEL || 'info';

  const baseConfig = {
    level,
    messageKey: 'message',
    formatters: {
      level(label, number) {
        return { severity: label.toUpperCase(), level: number };
      },
    },
    base: { service, version },
    ...overrides,
  };

  return pino(baseConfig);
}

export const log = createLogger();

/**
 * Small helper (inspired by glits-web authEntry) for phase objects.
 */
export function phaseEntry(phase, data = {}) {
  return { phase, ...data };
}
