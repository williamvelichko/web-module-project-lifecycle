import React from "react";
import axios from "axios";
import Follower from "./Follower";

class FollowerList extends React.Component {
  state = {
    followersData: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/wlongmire/followers`)
      .then((resp) => {
        console.log(resp.data);
        this.setState({
          ...this.state,
          followersData: resp.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Follower followersData={this.followersData} />
      </div>
    );
  }
}
export default FollowerList;
