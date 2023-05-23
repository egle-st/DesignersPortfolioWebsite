import { Text } from '../Text/Text';
import TextData from '../../../data/data.json';
import { amarante, lato } from '../../../fonts';

import styles from './headerimagetext.module.scss';

interface HeaderImageText1 {
  text1: string;
  text2: string;
  image: string;
}

export const HeaderImageText = () => {
  const headerImageTextData: HeaderImageText1 = TextData.headerImageText;

  const handleHeaderButtonClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  return (
    <div
      className={`${styles['container']} ${amarante.variable} ${lato.variable}`}
    >
      <Text content={headerImageTextData.text1} className='text1' />
      <Text content={headerImageTextData.text2} className='text2' />
      <button
        className={styles['header-button']}
        onClick={handleHeaderButtonClick}
      ></button>
    </div>
  );
};
