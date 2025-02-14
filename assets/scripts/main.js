import { displayWeather } from "./displayinfo.js";

document.getElementById("btncheck").addEventListener('click', async () => {

    const cityname = document.getElementById("inpname").value
    const api = 'YOUR-API-KEY'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api}&units=metric`


    try {
        if (!cityname) return alert("please enter valid name!")
        const response = await fetch(url)
        if (!response.ok) throw new Error("City not found!");

        const data = await response.json()
        displayWeather(data)

    } catch (error) {
        document.getElementById("info").innerHTML = `<p style="color:red;> ${error.message} </p>`
    }
})
