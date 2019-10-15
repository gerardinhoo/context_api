import React, { useContext, createContext } from "react";
import "./App.css";

const UserContext = createContext();

class App extends React.Component {
  state = {
    firstName: "Gerard",
    lastName: "Eklu",
    profession: "Software Engineer",
    image_url: "https://ca.slack-edge.com/T03PB1F2E-UBM5LRJHH-6fe78522416f-72",
    favorite_sport: "Soccer"
  };

  render() {
    const {
      firstName,
      lastName,
      profession,
      image_url,
      favorite_sport
    } = this.state;

    return (
      <UserContext.Provider
        value={{
          firstName,
          lastName,
          profession,
          image_url,
          favorite_sport
        }}
      >
        <Main />
      </UserContext.Provider>
    );
  }
}

const Navbar = () => {
  const { profession } = useContext(UserContext);
  return (
    <nav className="navbar bg-success">
      <span className="title">GERARD'S PROFILE</span>
      {profession}
    </nav>
  );
};

const Main = () => {
  const {
    firstName,
    lastName,
    profession,
    image_url,
    favorite_sport
  } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <div className="card text-center">
        <img
          src={image_url}
          alt="profile"
          className="round-img"
          style={{ width: "60px" }}
        />
        <span>
          <h2>
            Full Name:{firstName} {lastName}
          </h2>
          <h2>Profession:{profession}</h2>
          <h2>Favorite Sport:{favorite_sport}</h2>
        </span>
      </div>
    </div>
  );
};

export default App;
