import React from "react";
import "./App.css";
import StandardBtn from "./StandardBtn";

const App = () => {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };

  return (
    <div>
      <h1>Meine React-Anwendung</h1>
      <StandardBtn onClick={handleClick} label="Klick mich" />
      <div className="App">
        <Header />
        <Feed />
        <Sidebar />
      </div>
    </div>
  );
};

function Header() {
  return (
    <header>
      <h1>Finstergram</h1>
    </header>
  );
}

function Feed() {
  return (
    <section className="feed">
      <Post />
      <Post />
      {/* Weitere Beiträge hinzufügen */}
    </section>
  );
}

function Post() {
  return (
    <div className="post">
      <img src="https://placekitten.com/800/600" alt="Post" />
      <p>Beitragsbeschreibung</p>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <UserInfo />
      <Suggestions />
    </aside>
  );
}

function UserInfo() {
  return (
    <div className="user-info">
      <img src="https://placekitten.com/50/50" alt="Benutzerbild" />
      <p>Benutzername</p>
    </div>
  );
}

function Suggestions() {
  return (
    <div className="suggestions">
      <h2>Vorschlag</h2>
      <UserCard />
      <UserCard />
      {/* Weiteres hinzufügen */}
    </div>
  );
}

function UserCard() {
  return (
    <div className="user-card">
      <img src="https://placekitten.com/50/50" alt="Benutzerbild" />
      <p>Benutzername</p>
      <button>Folgen</button>
    </div>
  );
}

export default App;
