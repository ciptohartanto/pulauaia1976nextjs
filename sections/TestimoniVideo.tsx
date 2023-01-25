import { useEffect, useRef } from 'react';
import { Video, Asset } from '@/gql/graphql';

type TestimoniVideoType = Pick<Video, 'judul' | 'webmedia'>;
type TheVideoType = Pick<Asset, 'url'>;

const PAUSE_VIDEO_WITHIN = 500;

const TheVideo = ({ url }: TheVideoType) => {
  const refVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let pauseVideo = setTimeout(() => {
      if (refVideo.current !== null) {
        refVideo.current.pause();
      }
    }, PAUSE_VIDEO_WITHIN);

    return () => {
      clearTimeout(pauseVideo);
    };
  });
  return (
    <video
      ref={refVideo}
      className="testimoniVideo-video"
      muted
      autoPlay
      controls
      preload="metadata"
    >
      <source src={url} type="video/mp4"></source>
    </video>
  );
};

const TestimoniVideo = ({ judul, webmedia }: TestimoniVideoType) => {
  return (
    <section className="testimoniVideo globals-section">
      <h2 className="globals-judul">{judul}</h2>
      <ul className="testimoniVideo-list">
        {webmedia?.media.map((item) => {
          return (
            <li className="testimoniVideo-item" key={item.id}>
              <TheVideo url={item.url} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TestimoniVideo;
