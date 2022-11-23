const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa')({
  dest: 'public',
});

const nodeEnv = process.env.NODE_ENV;
const dev = nodeEnv !== 'production';

const config = {
  webpack: (config) => {
    config.devtool = dev ? 'eval-source-map' : false;
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
  pwa: {
    dest: 'public',
    disable: dev,
  },
  // images: {
  //   domains: ['domainname.com'],
  // },
  publicRuntimeConfig: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  swcMinify: false,
  crossOrigin: 'anonymous',
};

module.exports = withPWA(withBundleAnalyzer(config));
