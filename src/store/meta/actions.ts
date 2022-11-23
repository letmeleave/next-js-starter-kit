import { getSeo } from '@/api/SEO';

import { MetaActionTypes } from '@/store/meta/actionTypes';

export const getMetaAction = (path: string) => {
  return async (dispatch: any): Promise<void> => {
    const response = await getSeo(path);
    const { data } = response;
    dispatch({
      type: MetaActionTypes.GET_META,
      payload: data,
    });
  };
};
