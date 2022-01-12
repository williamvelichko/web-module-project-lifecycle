import React from "react";

class Follower extends React.Component {
  render() {
    return (
      <div className="follower">
        <h4>
          Followers:
          {this.props.data.map((item) => {
            return (
              <div className="follower_container">
                <img key={item.id} src={item.avatar_url} />

                <h3>{item.login}</h3>
              </div>
            );
          })}
        </h4>
      </div>
    );
  }
}
export default Follower;
