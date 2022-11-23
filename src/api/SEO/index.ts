import { IMetaData } from '@/types';

import { AxiosPromise } from 'axios';

import axiosInstance from '@/api/axiosInstance';

export const getSeo = async (path: string): Promise<AxiosPromise<IMetaData>> => {
  try {
    return await axiosInstance.get('/api/seo/page', {
      params: {
        path,
      },
    });
  } catch (e) {
    //throw new Error('Не удалось получить meta');

    // TODO

    console.log(e);
    return {
      status: 200,
      statusText: 'Success',
      headers: {},
      config: {},
      data: {
        title: 'Page',
        description: 'page description',
        keywords: 'a, b, c',
        h1: 'TITLE',
        og_title: 'titiel',
        og_description: 'desc',
        og_image: 'img_url',
      },
    };
  }
};
