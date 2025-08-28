import hoorayGroup from "./assets/HoorayGroupVer.jpeg";
import "./App.css";
import Navbar from "./Navbar";
import Profile from "./Profile";
import SetList from "./SetList";
import Events from "./Events";
import Preorder from "./Preorder";

function App() {
  return (
    <div className="App">
      <div class="mainpage">
        <Navbar />
        <img src={hoorayGroup} class="hooray-mainpage" alt="logo" />
        <div class="title">
          <h1>Stray Kids the 4th Album</h1>
          <p>Fanmade Webpage</p>
        </div>
      </div>
      <Profile />
      <SetList />
      <Events />
      <Preorder />
    </div>
  );
}

export default App;
