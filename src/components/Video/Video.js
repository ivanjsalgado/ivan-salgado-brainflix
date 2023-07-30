import "./Video.scss";

function Video({ id, image, title, channel, handleSelectVideo }) {
  return (
    <div className="video">
      <img
        onClick={() => handleSelectVideo(id)}
        src={image}
        className="video__image"
        alt={title}
      ></img>
      <div className="video__container">
        <h2 className="video__title">{title}</h2>
        <p className="video__creator">{channel}</p>
      </div>
    </div>
  );
}

export default Video;
