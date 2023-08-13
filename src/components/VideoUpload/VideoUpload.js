import { useState } from "react";
import BikeImage from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function VideoUpload() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = () => {
    const newVideo = {
      title: title,
      description: description,
    };
    axios
      .post("http://localhost:8080/videos", newVideo)
      .then()
      .catch((err) => {
        console.log(err);
      });
    alert("Information provided has been uploaded");
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <section className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <div className="upload__container">
        <div className="upload__thumb-container">
          <p className="upload__thumb">VIDEO THUMBNAIL</p>
          <img className="upload__image" src={BikeImage} alt="Test" />
        </div>
        <div className="upload__form-container">
          <form className="upload__form">
            <label className="upload__name">TITLE YOUR VIDEO</label>
            <input
              onChange={handleTitle}
              className="upload__comment-area"
              placeholder="Add a title to your video"
              value={title}
            ></input>
            <label className="upload__description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              onChange={handleDescription}
              className="upload__description-area"
              placeholder="Add a description to your video"
              value={description}
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
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <button onClick={handleSubmit} className="upload__submit--hide">
            PUBLISH
          </button>
        </Link>
      </div>
    </section>
  );
}

export default VideoUpload;
