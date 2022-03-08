module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mint',
        permanent: true,
      },
    ]
  },
}
