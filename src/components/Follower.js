import React from "react";

class Follower extends React.Component {
  render() {
    return (
      <div className="follower">
        {this.props.data.map((item) => {
          return (
            <div className="follower_container">
              <img key={item.id} src={item.avatar_url} />

              <h3>{item.login}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Follower;
