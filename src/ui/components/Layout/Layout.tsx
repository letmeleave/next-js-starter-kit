import type { IMetaData } from '@/types';

import type { FC } from 'react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';

import styles from './Layout.module.scss';

const Meta = dynamic(() => import('@/ui/services/Meta/Meta'));
// const Header = dynamic(() => import('./components/Header/Header'));
// const Sidebar = dynamic(() => import('./components/Sidebar/Sidebar'));

interface LayoutProps {
  children: JSX.Element | null;
  meta?: IMetaData;
}

const Layout: FC<LayoutProps> = ({ meta, children }) => {
  return (
    <>
      <Meta meta={meta} />
      <div id="root_component" className={classNames(styles.root)}>
        {children}
      </div>
    </>
  );
};

export default Layout;
