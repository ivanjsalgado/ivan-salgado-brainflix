import "./Hero.scss";

function Hero({ selectedVideo }) {
  return (
    <article className="hero">
      <video
        className="hero__video"
        controls
        poster={selectedVideo.image}
      ></video>
    </article>
  );
}

export default Hero;
