/** @type {import('next').NextConfig} */
import withPlugins from 'next-compose-plugins';
import withBundleAnalyzer from '@next/bundle-analyzer';
import {i18n} from './config/i18n.mjs';

export default withPlugins([withBundleAnalyzer({enabled: !!process.env.ANALYZE})], {
    i18n,
    reactStrictMode: true,
    output: 'standalone',
    basePath: '/products',
    pageExtensions: ['page.tsx', 'page.ts'],
    webpack: (config) => {
        config.module.rules.push(
            /**
             * This fixes a runtime error when using .mjs files in dev mode
             * .mjs files are needed so that we can use i18next-icu as an ES module
             * See here: https://github.com/vercel/next.js/issues/17806#issuecomment-913437792
             * We need to use it as an ES module because of another runtime error
             * when trying to use its ICU class constructor with next-i8next
             * See here for similar unresolved issues: https://github.com/i18next/next-i18next/issues/1261
             */
            {
                test: /\.m?js$/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false,
                },
            },
        );

        return config;
    },
});
