import React from "react";

export default function({theme, setTheme}) {  
  return (
    <header>
      <div className="title-wrapper">
        <h1 className="title">Social Media Dashboard</h1>
        <p className="title-subhead">
          Total Followers: <span id="total-followers">23,004</span>
        </p>
      </div>
      <div className="divider"></div>
      <div className="theme-wrapper">
        <p className="theme-name">{theme} Mode</p>
        <div className="toggle-wrapper" onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <div className="toggle-circle"></div>
        </div>
      </div>
    </header>
  );
}
