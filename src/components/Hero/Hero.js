import "./Hero.scss";

function Hero({ image }) {
  return (
    <article className="hero">
      <video className="hero__video" controls poster={image}></video>
    </article>
  );
}

export default Hero;
