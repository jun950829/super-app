const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath : "",
  distDir : '.next',
  // experimental: {
  //   concurrentFeatures: true,
  //   serverComponents: true,
  // },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  trailingSlash : true,
  productionBrowserSourceMaps : false,
  reactStrictMode: true,
  useFileSystemPublicRoutes: true,
  swcMinify: true,
  pageExtensions : ['tsx', 'ts', 'jsx', 'js'],
  sassOptions : {
    includePaths: [path.join(__dirname, 'styles')]
  },
  compiler : {
    emotion : true,
  },
  images : {
    unoptimized : true,
  },

  async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: process.env.NEXT_PUBLIC_WEB_URL + "api/:path*",
			},
			{
				source: "/api/contact/:path*",
				destination: process.env.NEXT_PUBLIC_WEB_URL + "api/contact/:path*",
			},
		];
	},
}

module.exports = nextConfig
