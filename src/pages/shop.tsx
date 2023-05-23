import { FC } from 'react';
import { Text } from '../Components/Text/Text';
import { rubik } from '../../fonts';
import { Header } from '../Components/Header/Header';
import Data from '../../data/data.json';
import { Footer } from '../Components/Footer/Footer';
import { amarante } from '../../fonts';

import styles from './styles/shop.module.scss';

interface LinksInfo {
  id: number;
  path: string;
  title: string;
}

interface ShopInfo {
  text1: string;
  text2: string;
  text3: string;
}
const ShopPage: FC = () => {
  const linksInfo: LinksInfo[] = Data.linksInfo;
  const shopText: ShopInfo = Data.shop;
  return (
    <div className={`${styles['shop-page']} ${rubik.variable}`}>
      <Header links={linksInfo} />
      <Text content={shopText.text1} className='shop-text1' />
      <Text content={shopText.text2} className='shop-text2' />
      <Text content={shopText.text3} className='shop-text3' />
      <Footer
        className='page-footer'
        content='© Akve_Design 2023'
        fontFamily={`${amarante.variable}`}
      />
    </div>
  );
};

export default ShopPage;
