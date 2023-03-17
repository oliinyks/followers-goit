import logo from "./img/logo.svg";
import content from "./img/content-picture.png";
import user from "./img/user.png";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [followers, setFollowers] = useState(
    () => JSON.parse(window.localStorage.getItem("followerCount")) ?? 100500
  );
  const [isFollow, setIsFollow] = useState(
    () => JSON.parse(window.localStorage.getItem("isFollowing")) ?? false
  );

  useEffect(() => {
    localStorage.setItem("isFollowing", JSON.stringify(isFollow));
    localStorage.setItem("followerCount", JSON.stringify(followers));
  }, [isFollow, followers]);

  const onBtnClick = () => {
    if (isFollow) {
      setFollowers((prev) => prev - 1);
    } else {
      setFollowers((prev) => prev + 1);
    }
    setIsFollow((current) => !current);
  };

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
          <p className="user-followers">
            {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            followers
          </p>
          <button
            onClick={onBtnClick}
            className={isFollow ? "user-button button-active" : "user-button"}
          >
            {isFollow ? "following" : "follow"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
