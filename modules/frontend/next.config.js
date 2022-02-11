/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT ?? 'http://0.0.0.0:3001/graphql'
  }
}

module.exports = nextConfig
