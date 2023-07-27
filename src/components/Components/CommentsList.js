import "./CommentsList.scss";
import Comment from "./Comment";

function CommentsList() {
  return (
    <section className="list">
      <Comment />
      <Comment />
      <Comment />
    </section>
  );
}

export default CommentsList;
