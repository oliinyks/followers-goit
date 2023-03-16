import logo from "./img/logo.svg";
import content from "./img/content-picture.png";
import user from "./img/user.png";
import "./App.css";
import { useState } from "react";

function App() {
	const [followers, setFollowers] = useState('');

	onBtnClick(){
		
	}
  return (
    <div className="app">
      <header className="header">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </header>

      <main>
        <img className="content-photo" src={content} alt="content" />
        <img className="user-photo" src={user} alt="user" />
        <div className="user-content">
          <p className="user-tweets">777 tweets</p>
          <p className="user-followers">100,501 followers</p>
          <button className="user-button">following</button>
        </div>
      </main>
    </div>
  );
}

export default App;
