import { RouterContext } from 'oak';
import config from 'config';

const fetchWeather = async (ctx: RouterContext) => {
  try {
    const params = await ctx.params;
    const { city } = params;
    const fetchedJson = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.WEATHER_API}`
    );
    const data = await fetchedJson.json();
    ctx.response.body = JSON.stringify(data);
  } catch (err) {
    console.error(err);
  }
};

export { fetchWeather };
