import "./App.scss";
import CommentsForm from "./components/Components/CommentsForm";
import Header from "./components/Components/Header";
import Hero from "./components/Components/Hero";
import VideoDescription from "./components/Components/VideoDescription";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <VideoDescription />
      <CommentsForm />
    </div>
  );
}

export default App;
