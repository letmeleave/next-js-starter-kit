import { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export enum ButtonColors {
  WHITE = '#FAFAFA',
  BLACK = '#000',
}

interface ButtonProps {
  title: string;
  className?: string;
  color?: ButtonColors;
}

const Button: FC<ButtonProps> = ({ title, className, color }) => {
  return (
    <button style={{ backgroundColor: color }} className={classNames(styles.container, className)}>
      {title}
    </button>
  );
};

export default Button;
