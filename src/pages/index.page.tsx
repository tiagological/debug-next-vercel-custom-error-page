import React, {ReactElement} from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

// Types
import type {NextPage, GetServerSidePropsResult} from 'next';
import type {SSRConfig} from 'next-i18next';

// Components

// i18n
import nextI18NextConfig from '../../next-i18next.config.mjs';
import {useTranslation} from 'next-i18next';

const Home: NextPage = (): ReactElement => {
    const {t} = useTranslation();

    return <p>{t('HELLO')}</p>;
};

export async function getServerSideProps({locale}: {locale: string}): Promise<GetServerSidePropsResult<SSRConfig>> {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translations'], nextI18NextConfig)),
        },
    };
}

export default Home;
