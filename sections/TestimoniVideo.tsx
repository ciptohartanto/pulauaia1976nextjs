import { Video } from '@/gql/graphql';

type TestimoniVideoType = Pick<Video, 'judul' | 'webmedia'>;

const TestimoniVideo = ({ judul, webmedia }: TestimoniVideoType) => {
  return (
    <section className="testimoniVideo globals-section">
      <h2 className="globals-judul">{judul}</h2>
      <ul className="testimoniVideo-list">
        {webmedia?.media.map((item) => {
          return (
            <li className="testimoniVideo-item" key={item.id}>
              <video
                className="testimoniVideo-video"
                muted
                controls
                preload="metadata"
              >
                <source src={`${item.url}#t0.5`} type="video/mp4"></source>
              </video>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TestimoniVideo;
