import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Link } from "react-router-dom";

import CarouselWeather from "./CarouselWeather";
import Tasks from "./Tasks";
import Weather from "./Weather";

const App = () => (
  <main>
    <nav>
      <Link to="weatherCarousel">Weather Carousel</Link> |{" "}
      <Link to="weather">Weather</Link>
    </nav>
    <Routes>
      <Route path="/weatherCarousel" element={<WeatherCarousel />} />
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

const WeatherCarousel = () => (
  <>
    <CarouselWeather />
  </>
);

const WeatherForecast = () => (
  <>
    <Weather />
  </>
);

export default App;
