import React, {useState} from "react";
import "./scss/global.scss";
import data from "./data.json";
import BCard from "./components/bigcard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmallCard from "./components/SmallCard";

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <main className={`${theme}-theme`}>
      <div className="top-wrapper">
        <Header theme={theme} setTheme={setTheme}></Header>
        <div className="section-container">
          {data.users.map(user => (
            <BCard data={user}></BCard>
          ))}
        </div>
      </div>
      <div className="bottom-wrapper">
        <h2 className="title">Overview - Today</h2>
        <div className="section-container">
            {data.info.map(data=>(<SmallCard data={data}></SmallCard>))}
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
