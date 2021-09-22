import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Tasks from "./Tasks";
import Weather from "./Weather";

const App = () => (
  <main>
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link> |{" "}
      <Link to="weather">Weather</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/weather" element={<WeatherForecast />} />
    </Routes>
  </main>
);

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Tasks />
  </>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

const WeatherForecast = () => (
  <>
    <Weather />
  </>
);

export default App;
