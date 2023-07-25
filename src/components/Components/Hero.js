import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <video
        className="hero__video"
        controls
        poster="https://i.imgur.com/l2Xfgpl.jpg"
      ></video>
    </div>
  );
}

export default Hero;
