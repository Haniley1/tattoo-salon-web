/** @type {import('next').NextConfig} */

import svg from '@neodx/svg/webpack';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          root: 'app/_assets/icons',
          output: 'public/icons',
          group: true,
          fileName: '{name}.{hash:8}.svg',
          resetColors: {
            replaceUnknown: 'currentColor',
            exclude: [/[\w-]*-colored\.svg$/],
          },
          metadata: {
            path: 'app/_components/Icon/sprite.gen.ts',
            runtime: {
              size: true,
              viewBox: true,
            },
          },
        })
      )
    }
    return config
  },
};

export default nextConfig;
