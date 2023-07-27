import "./App.scss";
import CommentsForm from "./components/Components/CommentsForm";
import Header from "./components/Components/Header";
import Hero from "./components/Components/Hero";
import VideoDescription from "./components/Components/VideoDescription";
import CommentsList from "./components/Components/CommentsList";
import Videos from "./components/Components/Videos";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <div className="container__one">
          <VideoDescription />
          <CommentsForm />
          <CommentsList />
        </div>
        <div className="container__two">
          <Videos />
        </div>
      </div>
    </div>
  );
}

export default App;
