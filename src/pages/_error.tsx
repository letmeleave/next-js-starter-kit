import type { IMetaData } from '@/types';

import type { NextPage, NextPageContext } from 'next';
import dynamic from 'next/dynamic';

import Layout from '@/ui/components/Layout/Layout';

const Errors = dynamic(() => import('@/ui/pages/Errors/Errors'));

interface ErrorProps {
  statusCode: number;
  meta: IMetaData;
}

const Error: NextPage<ErrorProps> = ({ statusCode, meta }) => {
  return (
    <Layout meta={meta}>
      <Errors error={statusCode} />
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  let statusCode = 404;
  if (res) {
    statusCode = res.statusCode;
  } else if (err && err.statusCode) {
    statusCode = err.statusCode;
  }
  const meta = {
    title: statusCode === 404 ? 'Page not found' : 'Internal server error',
  };
  return { statusCode, meta };
};

export default Error;
