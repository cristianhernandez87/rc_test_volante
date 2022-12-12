export async function getWeather(lat, long) {
    const url = `https://api.weather.gov/points/${lat},${long}`;
    const response:any = await fetch(url);
    response.lat = lat;
    response.long = long;
    const result = await response.json();
    return result
}

export async function getWeatherData(data) {
    const url = data
    const response:any = await fetch(url);
    const result = await response.json();
    return result
}