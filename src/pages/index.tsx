import type { IMetaData } from '@/types';

import type { GetServerSideProps, NextPage } from 'next';

import Layout from '@/ui/components/Layout/Layout';

interface IndexPageProps {
  meta?: IMetaData;
}

const HomePage: NextPage<IndexPageProps> = ({ meta }) => {
  return (
    <Layout meta={meta}>
      <></>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const meta = {
    title: 'Главная страница',
    description: 'Описание главной страницы',
    keywords: 'ключевые, слова, главной, страницы',
  };

  return {
    props: {
      meta,
    },
  };
};

export default HomePage;
