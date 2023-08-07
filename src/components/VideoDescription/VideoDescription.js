import "./VideoDescription.scss";
import ViewIcon from "../../assets/images/views.svg";
import LikeIcon from "../../assets/images/likes.svg";

function VideoDescription({
  title,
  channel,
  timestamp,
  views,
  likes,
  description,
}) {
  let time = new Date(timestamp).toLocaleDateString();

  return (
    <section className="description">
      <h1 className="description__header">{title}</h1>
      <div className="description__stats">
        <div className="description__creator-date">
          <h2 className="description__creator">By {channel}</h2>
          <p className="description__date">{time}</p>
        </div>
        <div className="description__container">
          <div className="description__icons">
            <img
              className="description__view-icon"
              src={ViewIcon}
              alt="View Icon"
            />
            <p className="description__view-tablet">{views}</p>
            <img
              className="description__like-icon"
              src={LikeIcon}
              alt="Like Icon"
            />
          </div>
          <div className="description__view-like">
            <p className="description__view">{views}</p>
            <img
              className="description__like-icon-tablet"
              src={LikeIcon}
              alt="Like Icon"
            />
            <p className="description__like">{likes}</p>
          </div>
        </div>
      </div>
      <div className="description__text-container">
        <p className="description__text">{description}</p>
      </div>
    </section>
  );
}

export default VideoDescription;
