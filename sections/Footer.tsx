import { Footer } from '@/gql/graphql';

type FooterType = Pick<Footer, 'telpon' | 'alamat'>;
const Footer = ({ telpon, alamat }: FooterType) => {
  return (
    <div className="footer">
      <div className="footer-wrapper globals-section">
        <div className="footer-section">
          <span className="footer-caption">Alamat</span>
          <address className="footer-main">{alamat}</address>
        </div>
        <div className="footer-section">
          <span className="footer-caption">Telepon</span>
          <a href={`tel:${telpon.replace(/ /g, '')}`} className="footer-main">
            {telpon}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
