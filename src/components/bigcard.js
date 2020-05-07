import React from "react";

export default function(props) {
  const { username, data, stat, type, source } = props.data;
  return (
    <div className={`s1-card s1-card-${source} card-def`}>
      <div className="s1-card-top">
        <span className={`icon-${source} icon-svg`}></span>
        <span className="username">
          {username}
        </span>
      </div>
      <div className="s1-card-mid">
        <div className="card-count-text">
          {data}
        </div>
        <p className="s1-card-follow-text">{type}</p>
      </div>
      <div className="s1-card-bot">        
        <span
          className={
            (source === "youtube" ? "icon-down" : "icon-up") + " icon-arrow"
          }
        ></span>
        <span
          className={(source === "youtube" ? "red" : "green") + "-text-analytics"}
        >
          <span>{stat} Today</span>
        </span>
      </div>
    </div>
  );
}
