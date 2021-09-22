export const getTasks = () => _get("/api/tasks");

export const addTask = (name) => _post("/api/tasks", { name });

export const getWeather = (city) => _get("/api/weather?city=" + city);

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};

// http://api.openweathermap.org/data/2.5/weather?q=London&appid=9585ac6ea20ea7e123d6bb2556af237f
