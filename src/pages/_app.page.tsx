import React from 'react';
import {AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';

// i18n
import nextI18nextConfig from '../../next-i18next.config.mjs';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, nextI18nextConfig);
