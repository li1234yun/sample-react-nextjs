module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    domains: ["www.baidu.com"]
  }
}
