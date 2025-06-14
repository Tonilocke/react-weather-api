const Temperature = ({ temp }) =>{
    console.log(temp);
    return(
        <div className="temperature-card">
            <p>Temperature: { parseInt(temp.main.temp) }</p>
            <p> Humidity: { temp.main.humidity }</p>
            <p>Wind: { temp.wind.speed }</p>
            <p>Weather Description: { temp.weather[0].description }</p>
        </div>
    );
}

export default Temperature;