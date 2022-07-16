/* eslint-disable consistent-return */
import axios from 'axios';
import ApiClient from "../utils/ApiClient";
import placesAction from "./placeActions";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await ApiClient(placesAction.getPlacesData(type, sw, ne))
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};