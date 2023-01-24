import Lightbox from '@/components/Lightbox';
import { Photo } from '@/gql/graphql';

type GalleryFotoType = Pick<Photo, 'judul' | 'webmedia'>;

const GalleryFoto = ({ webmedia, judul }: GalleryFotoType) => {
  return (
    <div className="galleryFoto globals-section">
      <h2 className="galleryFoto globals-judul">{judul}</h2>

      <Lightbox webmedia={webmedia} />
    </div>
  );
};

export default GalleryFoto;
