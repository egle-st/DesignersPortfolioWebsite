import { FC } from 'react';
interface PageProps {
  info: string;
}

const Designer: FC<PageProps> = (props) => {
  return <h1>Who is this designer Page. {props.info}</h1>;
};

export default Designer;
