import type { IMetaData } from '@/types';

import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import Layout from '@/ui/components/Layout/Layout';

const Errors = dynamic(() => import('@/ui/pages/Errors/Errors'));

interface NotFoundPageProps {
  meta: IMetaData;
}

const NotFoundPage: NextPage<NotFoundPageProps> = ({ meta }) => {
  return (
    <Layout meta={meta}>
      <Errors error={404} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      meta: {
        title: 'Page not found',
      },
    },
  };
};

export default NotFoundPage;
