import "./Comment.scss";

function Comment() {
  return (
    <div className="comment">
      <div className="comment__top-container">
        <div className="comment__photo"></div>
        <p className="comment__name">Micheal Lyons</p>
        <p className="comment__date">08/09/2021</p>
      </div>
      <div className="comment__text-container">
        <p className="comment__text">
          They BLEW the ROOF off at their last event, once everyone started
          figuring out they were going. This is still simply the greatest
          opening of an event I have EVER witnessed.
        </p>
      </div>
    </div>
  );
}

export default Comment;
