export async function getWeather(lat, long) {
    const app_id = "6f6e9200"
    const app_key = "24b5b65a4106f13559164c83836180cb"
    const app_location = "40.71,-74.00"
    const app_latitude = "4.60971"
    const app_longitude = "-74.08175"

    const response = await fetch(`http://api.weatherunlocked.com/api/current/${app_location}?app_id=${app_id}&app_key=${app_key}`)
    // response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`) 
    const result = await response.json()
    return result

}