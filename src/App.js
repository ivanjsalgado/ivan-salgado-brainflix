import "./App.scss";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import CommentsList from "./components/CommentsList/CommentsList";
import Videos from "./components/Videos/Videos";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import { useState } from "react";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  function handleSelectVideo(videoId) {
    const foundVideo = videoDetails.find((video) => {
      return video.id === videoId;
    });
    setSelectedVideo(foundVideo);
  }

  const filteredVideos = videos.filter((video) => {
    return video.id !== selectedVideo.id;
  });

  return (
    <div className="App">
      <Header />
      <Hero selectedVideo={selectedVideo} />
      <div className="container">
        <div className="container__one">
          <VideoDescription selectedVideo={selectedVideo} />
          <CommentsForm selectedVideo={selectedVideo} />
          <CommentsList selectedVideo={selectedVideo} />
        </div>
        <div className="container__two">
          <Videos
            selectedVideo={selectedVideo}
            filteredVideos={filteredVideos}
            handleSelectVideo={handleSelectVideo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
