import "./Hero.scss";

function Hero() {
  return (
    <article className="hero">
      <video
        className="hero__video"
        controls
        poster="https://i.imgur.com/l2Xfgpl.jpg"
      ></video>
    </article>
  );
}

export default Hero;
