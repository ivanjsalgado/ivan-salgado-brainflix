import "./CommentsForm.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";

function Comments() {
  return (
    <section className="comments">
      <h2 className="comments__heading">3 Comments</h2>
      <div className="comments__container">
        <img className="comments__avatar" src={Avatar} alt="Avatar Icon" />
        <form className="comments__form">
          <div className="comments__form-container">
            <label className="comments__name">JOIN THE CONVERSATION</label>
            <textarea
              className="comments__comment-area"
              name="comment-area"
              id="comment-area"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <input
            className="comments__submit"
            type="submit"
            value="COMMENT"
          ></input>
        </form>
      </div>
    </section>
  );
}

export default Comments;
