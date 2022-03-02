import React, { ReactNode } from 'react';
import style from './button.module.scss';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={style.button}>
      {children}
    </button>
  );
}
