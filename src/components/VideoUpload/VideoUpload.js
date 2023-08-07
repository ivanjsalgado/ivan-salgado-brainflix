import BikeImage from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import { Link } from "react-router-dom";

function VideoUpload() {
  const handleSubmit = () => {
    alert("Information provided has been uploaded");
  };
  return (
    <div className="upload">
      <h2 className="upload__heading">Upload Video</h2>
      <div className="upload__container">
        <div className="upload__thumb-container">
          <p className="upload__thumb">VIDEO THUMBNAIL</p>
          <img className="upload__image" src={BikeImage} alt="Test" />
        </div>
        <div className="upload__form-container">
          <form className="upload__form">
            <label className="upload__name">TITLE YOUR VIDEO</label>
            <input
              className="upload__comment-area"
              name="upload-area"
              id="title"
              placeholder="Add a title to your video"
            ></input>
            <label className="upload__description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__description-area"
              name="upload-description"
              id="description"
              placeholder="Add a description to your video"
            ></textarea>
          </form>
        </div>
      </div>
      <div className="upload__buttons">
        <Link to={"/"}>
          <button onClick={handleSubmit} className="upload__submit">
            PUBLISH
          </button>
        </Link>
        <button className="upload__button">CANCEL</button>
        <Link to={"/"}>
          <button onClick={handleSubmit} className="upload__submit--hide">
            PUBLISH
          </button>
        </Link>
      </div>
    </div>
  );
}

export default VideoUpload;
