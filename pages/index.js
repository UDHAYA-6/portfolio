import React from "react";
import Header from "../Components/Header/Header";
import Main from "@/Components/Main Content/Main";
const index = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <main className="main">
        <Main />
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default index;
