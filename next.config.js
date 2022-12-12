const { imageConfigDefault } = require('next/dist/shared/lib/image-config');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath : '',
  distDir : '.next',
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
  }
}

module.exports = nextConfig
