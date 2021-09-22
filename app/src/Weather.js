import * as React from "react";

import * as apiClient from "./apiClient";

const Weather = () => {
  const [weather, setWeather] = React.useState([]);
  const [city, setCity] = React.useState("Seattle");

  const loadWeather = async () => setWeather(await apiClient.getWeather(city));
  console.log("hello", weather);

  React.useEffect(() => {
    loadWeather();
  }, []);

  // console.log("spec", weather.list[0].weather[0].icon);

  // let iconcode = weather[0].icon;
  // let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  // let arrayWeather = Object.values(weather);
  // let fahrenheit = Math.round((weather.main.temp - 273.15) * (9 / 5) + 32);
  return (
    <div>
      <h1>{city}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Description</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody></tbody>
        {weather.map((element, index) => (
          <tr>
            <td>{element.main.temp}</td>
            <td>{element.main.humidity}</td>
            <td>{element.weather[0].description}</td>
            <td>
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  element.weather[0].icon +
                  ".png"
                }
                alt="icon"
              />
            </td>
          </tr>
        ))}
      </table>
      {JSON.stringify(weather)}
    </div>
  );
};

export default Weather;

// const filterDays = (weather) => {
//   const date = new Date(weather.dt * 1000);
//   console.log(date.getHours());
//   return date.getHours() === 17;
// };

// let singleDays = [];
// if (weather.list) {
//   singleDays = weather.list.filter(filterDays);
// }

// {weather.cod === "200" ? (
//   <div>
//     <p>
//       <strong>{weather.city.name}</strong>
//     </p>
//     <p>
//       {" "}
//       <img
//         src={`http://openweathermap.org/im/wn${weather.list[0].weather[0].icon}@2x.png`}
//         alt={"weather icon"}
//       />{" "}
//       It is currently {Math.round(weather.list[0].main.temp)} degrees out
//       with {weather.list[0].weather[0].description}.
//     </p>

//     {singleDays.map((element, index) => {
//       console.log(element);
//       if (index === 0) {
//         return null;
//       }
//       const date = new Date(element.dt * 1000);
//       let dayOfWeek = "";
//       switch (date.getDay()) {
//         case 0:
//           dayOfWeek = "Sunday";
//           break;
//         case 1:
//           dayOfWeek = "Monday";
//           break;
//         case 2:
//           dayOfWeek = "Tuesday";
//           break;
//         case 3:
//           dayOfWeek = "Wednesday";
//           break;
//         case 4:
//           dayOfWeek = "Thursday";
//           break;
//         case 5:
//           dayOfWeek = "Friday";
//           break;
//         case 6:
//           dayOfWeek = "Saturday";
//           break;
//       }

//       let imgUrl = `http://openweathermap.org/im/wn${element.weather[0].icon}@2x.png`;

//       return (
//         <p>
//           {" "}
//           <img src={imgUrl} alt="weather icon" /> {dayOfWeek}, it will be{" "}
//           {Math.round(element.main.temp)} degrees out with{" "}
//           {element.weather[0].description}.
//         </p>
//       );
//     })}
//   </div>
// ) : null}
