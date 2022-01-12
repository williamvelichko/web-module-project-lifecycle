import React from "react";

import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    return (
      <div className="followerList">
        <Follower data={this.props.data} />
      </div>
    );
  }
}
export default FollowerList;
