import ICU from 'i18next-icu';
import {i18n} from './config/i18n.mjs';
import path from 'path';

const icu = new ICU();

const config = {
    i18n,
    defaultNS: 'web-payments',
    reloadOnPrerender: process.env.NODE_ENV !== 'production',
    use: [icu],
    serializeConfig: false,
    localePath: path.resolve('./public/locales'),
};

export default config;
