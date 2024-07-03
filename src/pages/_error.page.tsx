import React from 'react';
import {GetServerSidePropsResult} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {SSRConfig} from 'next-i18next';

// i18n
import nextI18NextConfig from '../../next-i18next.config.mjs';

function Error(): JSX.Element | null {
    return <p>Error page</p>;
}

export async function getServerSideProps({locale}: {locale: string}): Promise<GetServerSidePropsResult<SSRConfig>> {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['translations'], nextI18NextConfig)),
        },
    };
}

export default Error;
