import React from "react";
import { TweetButton } from "./TweetButton";

export class TweetCard extends React.Component {
  render() {
    const {
      name,
      nickName,
      date,
      post,
      avatarUrl,
      replyCount,
      retweetCount,
      likes,
    } = this.props;

    return (
      <div>
        <img
          src={avatarUrl}
          width={400}
        />
        <div>{`${name} ${nickName} ${date}`}</div>
        <p>{post}</p>
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-around",
          }}
        >
          <TweetButton
            count={replyCount}
            hoverColor="blue"
            description={
              "Reply"
            }
          />
          <TweetButton
            count={
              retweetCount
            }
            hoverColor="red"
            description={
              "Retweet"
            }
          />
          <TweetButton
            count={likes}
            hoverColor="yellow"
            description={
              "Likes"
            }
          />
        </div>
      </div>
    );
  }
}
