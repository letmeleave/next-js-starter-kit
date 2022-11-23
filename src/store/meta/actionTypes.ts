import { Action } from '@/store/types';

export enum MetaActionTypes {
  GET_META = 'GET_META',
}

export type FormatSet = {
  id: number,
  name: string,
}

export type MetaActions =
  Action<MetaActionTypes.GET_META>

export interface IMeta {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  og_title: string;
  og_description: string;
  og_image: string;

}
