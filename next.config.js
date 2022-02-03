/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs')

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)

