import { useEffect } from 'react';
import type { AppContext, AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';

import '@/assets/styles/index.scss';

import { wrapper } from '@/store';
import { getMetaAction } from '@/store/meta/actions';

function AppWithRedux({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.query.ref) {
      sessionStorage.setItem('ref', router.query.ref.toString());
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

AppWithRedux.getInitialProps = async (appContext: AppContext): Promise<any> => {
  const { ctx } = appContext;
  // @ts-ignore
  const { store, asPath } = ctx;
  // console.log(asPath);
  await store.dispatch(getMetaAction(asPath ?? '/'));
  // const seo = await getMetaAction(asPath ?? '/');
  // console.log(seo);
  return { store };
};

export default wrapper.withRedux(AppWithRedux);
