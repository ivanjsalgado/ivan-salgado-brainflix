import "./Comment.scss";

function Comment({ time, name, description }) {
  const date = new Date(time).toLocaleDateString();
  return (
    <div className="comment">
      <div className="comment__top-container">
        <div className="comment__photo"></div>
        <p className="comment__name">{name}</p>
        <p className="comment__date">{date}</p>
      </div>
      <div className="comment__text-container">
        <p className="comment__text">{description}</p>
      </div>
    </div>
  );
}

export default Comment;
