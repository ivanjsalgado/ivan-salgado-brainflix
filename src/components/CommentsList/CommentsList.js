import "./CommentsList.scss";
import Comment from "../Comment/Comment";

function CommentsList({ comments }) {
  return (
    <section className="list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          time={comment.timestamp}
          name={comment.name}
          description={comment.comment}
        />
      ))}
    </section>
  );
}

export default CommentsList;
