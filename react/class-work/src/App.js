import React from "react";

import { TweetCard } from "./components/TweetCard";
import "./App.css";
import { Counter } from "./components/Counter";
import { Button } from "./components/Button";
import { Time } from "./Time";

const tweets = [
  {
    name: "Dan",
    nickName: "@dan_abramov",
    date: "7 Sep",
    post: "asdfasdfasdfasdf",
    avatarUrl: "https://static.toiimg.com/thumb/msid-67586673,widt…de-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg",

    replyCount: 12,
    retweetCount: 10,
    likes: 10,
  },
  {
    name: "Dan",
    nickName: "@dan_abramov",
    date: "7 Sep",
    post: "Woke up from a vivid dream about the people from the first team i worked on. As if we’re working on something else now. I was the youngest, and there was this sense… like i want to earn their respect. Like hey, look. I can do this too. See? And they’re like yea, you’re right.",
    avatarUrl: "https://static.toiimg.com/thumb/msid-67586673,widt…de-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg",

    replyCount: 12,
    retweetCount: 10,
    likes: 10,
  },
  {
    name: "Dan",
    nickName: "@dan_abramov",
    date: "7 Sep",
    post: "ashdfklahskldfhakljsdhflkjhasdkl",
    avatarUrl: "https://static.toiimg.com/thumb/msid-67586673,widt…de-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg",

    replyCount: 12,
    retweetCount: 10,
    likes: 10,
  },
];

function App() {
  return (
    <div className="App">
      <Button text={"primary"} type={"primary"} onClick={() => alert("Primary")} />
      <Button text={"secondary"} type={"secondary"} onClick={() => alert("Secondary")} />
      <Button text={"text"} type={"text"} onClick={() => alert("Text")} />
      {/* <Counter background={"red"} initialCount={5} />
      <Counter background={"yellow"} />
      <Counter background={"green"} /> */}
      {/* {tweets.map(
        (tweet, index) => {
          const {
            name,
            nickName,
            date,
            post,
            avatarUrl,
            replyCount,
            retweetCount,
            likes,
          } = tweet;

          return (
            <TweetCard
              key={index}
              name={name}
              nickName={
                nickName
              }
              date={date}
              post={post}
              avatarUrl={
                avatarUrl
              }
              replyCount={
                replyCount
              }
              retweetCount={
                retweetCount
              }
              likes={likes}
            />
          );
        }
      )} */}
    </div>
  );
}

export default App;
