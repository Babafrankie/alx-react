import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import icon from "./close-icon.png";

export function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          background: "transparent",
          border: "none",
          position: "absolute",
          right: 20,
        }}
        aria-label="close"
      >
        <img src={icon} style={{ width: "0.5rem" }} alt="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
