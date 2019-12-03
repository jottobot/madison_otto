import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
      <Header>
        <Navigation style= {{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Header>
      <Drawer>
        <Navigation style={{ textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>
        <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
        <Main />
      </Content>
    </Layout>
  </div>
  );
}

export default App;
