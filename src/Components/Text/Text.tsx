import { FC } from 'react';

import styles from './text.module.scss';

interface TextProps {
  className: string;
  content: string;
}

export const Text: FC<TextProps> = ({ className, content }) => {
  return <p className={styles[className]}>{content}</p>;
};
