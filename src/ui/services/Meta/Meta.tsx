import type { IMetaData } from '@/types';

import type { FC } from 'react';
import { useSelector } from 'react-redux';
import Parser from 'html-react-parser';
import Head from 'next/head';

import { mediaStyle } from '../MediaQueries/MediaQueries';

import metaData from '@/assets/meta/meta-data.json';
import { selectMeta } from '@/store/meta/selectors';

const faviconHtml: string = metaData && metaData.favicon.html_code;

const DEFAULT_META = {
  title: '',
  description: '',
  image: '',
  keywords: '',
};

interface MetaProps {
  meta?: IMetaData;
}

const Meta: FC<MetaProps> = ({ meta }) => {
  const metaStore = useSelector(selectMeta);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { title, description, keywords, og_title, og_description, og_image } = metaStore || meta;
  return (
    <Head>
      <meta name="viewport" content="device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta property="og:image" content={og_image} />
      <meta property="og:description" content={og_description} />
      <meta property="og:title" content={og_title} />

      <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
      <meta httpEquiv="cleartype" content="on" />
      <meta name="keywords" lang="ru" content={keywords ?? DEFAULT_META.keywords} />
      {Parser(faviconHtml)}
      <title>{title ?? DEFAULT_META.title}</title>
      <meta name="description" content={description ?? DEFAULT_META.description} />
      <style type="text/css" dangerouslySetInnerHTML={{ __html: mediaStyle }} />
    </Head>
  );
};

export default Meta;
