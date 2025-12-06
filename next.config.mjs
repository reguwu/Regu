// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
// }

// export default nextConfig

import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // transpilePackages: ['next-mdx-remote'],
  // experimental: {
  //   mdxRs: true
  // }
}

export default withMDX()(nextConfig)