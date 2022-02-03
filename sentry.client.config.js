// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN || "https://d2176eb424e548ba88dbf877a6a0deae@o577104.ingest.sentry.io/5733936",
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  beforeSend(event, hint) {
    const error = hint.originalException
    console.warn("🐞 Sentry Before Send", { event, hint })
    if (error && error.message && error.message.match(/database unavailable/i)) {
      event.fingerprint = ["database-unavailable"]
    }
    return event
  },
})
