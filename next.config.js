/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/user',
        destination: '/user/orders',
        permanent: true,
      },
    ]
  },
}