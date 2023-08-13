import "./HomePage.scss";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Hero from "../../components/Hero/Hero";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsList from "../../components/CommentsList/CommentsList";
import Videos from "../../components/Videos/Videos";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function HomePage() {
  const { videoId } = useParams();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoDetails, setVideoDetails] = useState();

  let defaultVideoId = null;
  if (videos.length > 0) {
    defaultVideoId = videos[0].id;
  }

  let videoIdToDisplay = videoId !== undefined ? videoId : defaultVideoId;

  const filteredVideos = videos.filter((video) => {
    return video.id !== videoIdToDisplay;
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        setVideos(response.data);
        setSelectedVideo(response.data[0]);
        findVideoDetails(response.data[0].id);
      })
      .catch((error) => {
        console.log("error calling axios initially", error);
      });
  }, []);

  const findVideoDetails = (id) => {
    axios
      .get(`http://localhost:8080/videos/${id}`)
      .then((response) => {
        setVideoDetails(response.data);
      })
      .catch((error) => {
        console.log("error calling axios for video details", error);
      });
  };

  useEffect(() => {
    if (videoIdToDisplay === null) return;
    findVideoDetails(videoIdToDisplay);
  }, [videoIdToDisplay]);

  if (videoDetails === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <Hero image={videoDetails.image} />
      <div className="container">
        <div className="container__one">
          <VideoDescription
            title={videoDetails.title}
            channel={videoDetails.channel}
            timestamp={videoDetails.timestamp}
            views={videoDetails.views}
            likes={videoDetails.likes}
            description={videoDetails.description}
          />
          <CommentsForm numOfComments={videoDetails.comments.length} />
          <CommentsList comments={videoDetails.comments} />
        </div>
        <div className="container__two">
          <Videos filteredVideos={filteredVideos} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
