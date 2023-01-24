const TestimoniVideo = () => {
  return (
    <section className="testimoniVideo globals-section">
      <h2 className="globals-judul">Testimoni Video</h2>
      <ul className="testimoniVideo-list">
        <li className="testimoniVideo-item">
          <video className="testimoniVideo-video" autoPlay muted controls>
            <source
              src="https://pulauaia1976.com/images/video/v-3.MP4#t0.5"
              type="video/mp4"
            ></source>
          </video>
        </li>
      </ul>
    </section>
  );
};

export default TestimoniVideo;
