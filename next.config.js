require('dotenv').config()
// const { sizes } = require('./blocks/Image/sizes.json')

module.exports = {
  distDir: 'build',
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      'localhost',
      // Your domain(s) here
    ],
    // deviceSizes: sizes,
  },
}
