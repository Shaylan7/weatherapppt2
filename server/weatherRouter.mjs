import express from "express";

import * as db from "./db.mjs";
import fetch from 'node-fetch'; 

const weatherRouter = express.Router();


weatherRouter.get("/", async (request, response) => {
  let weatherAtNoon; 
  const city = request.query.city; 
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=" +city+ "&appid=a24f6a95c88938366c0ee6c8e297d505")
  .then((res) => res.json())
  .then(function(json) {
    const forecastIndexes = [3,11,19,27,35];
    if (json.list !== undefined){
      weatherAtNoon = json.list.filter((forecast,index) => {
        return forecastIndexes.includes(index);
      });
      response.json(weatherAtNoon);
    }
  })
});

weatherRouter.use(express.json()); 

// taskRouter.use(express.json());
// taskRouter.post("/", async (request, response) => {
//   const task = await db.addTask(request.body.name);
//   response.status(201).json(task);
// });

export default weatherRouter;
