import axios from "axios";

import React from "react";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    image: "",
    name: "",
    followers: "",
    repos: "",
    login: "",
    data: [],
    // followersName: [],
    // followersImage: [],
    // followersData: [],
  };
  componentDidMount() {
    console.log("mounting");
    axios.get("https://api.github.com/users/wlongmire").then((resp) => {
      this.setState({
        ...this.state,
        image: resp.data.avatar_url,
        name: resp.data.name,
        followers: resp.data.followers,
        repos: resp.data.public_repos,
      });
    });
  }

  // componentDidUpdate = () => {
  //   axios
  //     .get(`https://api.github.com/users/wlongmire/followers`)
  //     .then((resp) => {
  //       console.log(resp.data);

  //       // this.setState({
  //       //   ...this.state,
  //       //   followersData: resp.data,
  //       // });
  //     });
  // };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      login: e.target.value,
    });
  };
  handleSearch = (e) => {
    console.log("searching");
    e.preventDefault();
    const personName = this.state.login;
    axios.get(`https://api.github.com/users/${personName}`).then((resp) => {
      this.setState({
        ...this.state,
        image: resp.data.avatar_url,
        name: resp.data.name,
        followers: resp.data.followers,
        repos: resp.data.public_repos,
        login: "",
      });
    });
    axios
      .get(`https://api.github.com/users/${personName}/followers`)
      .then((resp) => {
        this.setState({
          ...this.state,
          data: resp.data,
        });
      });
  };

  render() {
    return (
      <div>
        <div className="main_container">
          {/* <div className="secondary_container"> */}
          <h1>Github Card</h1>
          <form>
            <input value={this.state.login} onChange={this.handleChange} />

            <button onClick={this.handleSearch}>search</button>
          </form>
          <div className="primary_container">
            <img src={this.state.image} />

            <div className="info_container">
              <h3>{this.state.name}</h3>

              <h5>
                <strong>Total Repos: </strong>
                {this.state.repos}
              </h5>
              <h5>
                <strong>Total Followers: </strong>
                {this.state.followers}
              </h5>
            </div>
          </div>
        </div>
        <FollowerList login={this.state.login} data={this.state.data} />
      </div>
    );
  }
}

export default App;
