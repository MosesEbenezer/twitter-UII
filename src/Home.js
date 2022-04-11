import React, { useEffect } from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import "./Home.css";

function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location = "/";
    }
  }, []);
  return (
    <div className="home">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default Home;
