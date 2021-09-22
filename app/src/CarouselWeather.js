import * as React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import Carousel from "react-bootstrap/Carousel";

import * as apiClient from "./apiClient";

const CarouselWeather = () => {
  const [weather, setWeather] = React.useState([]);
  const [city, setCity] = React.useState("Seattle");

  const loadWeather = async () => setWeather(await apiClient.getWeather(city));
  console.log("hello", weather);

  React.useEffect(() => {
    loadWeather();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    loadWeather();
  };

  // console.log("spec", weather.list[0].weather[0].icon);

  // let iconcode = weather[0].icon;
  // let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  // let arrayWeather = Object.values(weather);
  // let fahrenheit = Math.round((weather.main.temp - 273.15) * (9 / 5) + 32);

  return (
    <div>
      <Carousel>
        {weather.map((element, index) => {
          const date = new Date(element.dt * 1000);
          let dayOfWeek = "";
          switch (date.getDay()) {
            case 0:
              dayOfWeek = "Sunday";
              break;
            case 1:
              dayOfWeek = "Monday";
              break;
            case 2:
              dayOfWeek = "Tuesday";
              break;
            case 3:
              dayOfWeek = "Wednesday";
              break;
            case 4:
              dayOfWeek = "Thursday";
              break;
            case 5:
              dayOfWeek = "Friday";
              break;
            case 6:
              dayOfWeek = "Saturday";
              break;
          }
          return (
            <Carousel.Item interval={1000000}>
              <img
                className="d-block w-100"
                src="https://image.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg"
                // src="https://cdn.dribbble.com/users/925716/screenshots/3333720/attachments/722375/night.png?compress=1&resize=400x300"
                alt={city}
              />
              <Carousel.Caption>
                <h1 style={{ fontSize: 100 }}>{dayOfWeek}</h1>
                <br></br>
                <br></br>
                <table className="table">
                  <thead>
                    <tr>
                      {/* <th>Day of Week</th> */}
                      <th>Temperature</th>
                      <th>Humidity</th>
                      <th>Description</th>
                      <th>Icon</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <td>{dayOfWeek}</td> */}
                      <td>
                        {Math.round(
                          (element.main.temp - 273.15) * (9 / 5) + 32,
                        )}
                        °F
                      </td>
                      <td>{element.main.humidity}%</td>
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
                  </tbody>
                </table>
                <h1>{city}</h1>
                <br></br>
                <form onSubmit={onSubmit}>
                  <label>
                    Search City:{" "}
                    <input
                      onChange={(e) => setCity(e.currentTarget.value)}
                      value={city}
                    />
                  </label>{" "}
                  <button
                    style={{
                      borderRadius: 12,
                      color: "white",
                      backgroundColor: "gray",
                    }}
                  >
                    Go!
                  </button>
                </form>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default CarouselWeather;

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
