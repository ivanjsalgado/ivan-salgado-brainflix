import Video from "../Video/Video";
import "./Videos.scss";

function Videos({ filteredVideos, handleSelectVideo, selectedVideo }) {
  return (
    <section className="videos">
      <h2 className="videos__heading">NEXT VIDEOS</h2>
      {filteredVideos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          image={video.image}
          title={video.title}
          channel={video.channel}
          handleSelectVideo={handleSelectVideo}
          selectedVideo={selectedVideo}
        />
      ))}
    </section>
  );
}

export default Videos;
