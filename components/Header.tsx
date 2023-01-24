import { DataWebsite } from '@/gql/graphql';

type HeaderType = Pick<DataWebsite, 'title1' | 'title2' | 'title3'>;

const Header = ({ title1, title2, title3 }: HeaderType) => {
  return (
    <section className="header">
      <div className="header-wrapper">
        <h1 className="header-title1">{title1}</h1>
        <h2 className="header-title2">{title2}</h2>
        <span className="header-title3">{title3}</span>
      </div>
    </section>
  );
};

export default Header;
