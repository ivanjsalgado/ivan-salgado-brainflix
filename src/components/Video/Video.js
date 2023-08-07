import "./Video.scss";
import { Link } from "react-router-dom";

function Video({ id, image, title, channel }) {
  return (
    <div className="video">
      <Link to={`/video/${id}`}>
        <img src={image} className="video__image" alt={title}></img>
      </Link>
      <div className="video__container">
        <h2 className="video__title">{title}</h2>
        <p className="video__creator">{channel}</p>
      </div>
    </div>
  );
}

export default Video;
