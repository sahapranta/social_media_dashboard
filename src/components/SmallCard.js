import React from "react";

export default function(props) {
  const { type, source, count, stat } = props.data;
  return (
    <div className={`s2-card s2-card-${source} card-def`}>
      <div className="s2-card-top s2-top-bot-default">
        <span className="s2-card-title">{type}</span>
        <span className={"icon-" + source + " icon-svg"}></span>
      </div>
      <div className="s2-card-bot s2-top-bot-default">
        <span className="card-count-text" id={source + "-views-count"}>
          {count}
        </span>
        <div className="s2-card-analytics">
          <span
            className={
              (source === "youtube" ? "icon-down" : "icon-up") + " icon-arrow"
            }
          ></span>
          <span
            className={
              (source === "youtube" ? "red" : "green") + "-text-analytics"
            }
          >
            <span id={`${source}-views-analytics`}>{stat}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
