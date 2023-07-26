import "./VideoDescription.scss";
import ViewIcon from "../../assets/images/views.svg";
import LikeIcon from "../../assets/images/likes.svg";

function VideoDescription() {
  return (
    <section className="description">
      <h1 className="description__header">BMX Rampage: 2021 Highlights</h1>
      <div className="description__stats">
        <div className="description__creator-date">
          <h2 className="description__creator">By Red Crow</h2>
          <p className="description__date">07/11/2021</p>
        </div>
        <div className="description__container">
          <div className="description__icons">
            <img
              className="description__view-icon"
              src={ViewIcon}
              alt="View Icon"
            />
            <p className="description__view-tablet">1,001,023</p>
            <img
              className="description__like-icon"
              src={LikeIcon}
              alt="Like Icon"
            />
          </div>
          <div className="description__view-like">
            <p className="description__view">1,001,023</p>
            <img
              className="description__like-icon-tablet"
              src={LikeIcon}
              alt="Like Icon"
            />
            <p className="description__like">110,985</p>
          </div>
        </div>
      </div>
      <div className="description__text-container">
        <p className="description__text">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </div>
    </section>
  );
}

export default VideoDescription;
