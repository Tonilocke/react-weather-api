import Sun from "../assets/Sun.webp";
import Clouds from "../assets/Clouds.webp";
import Rain from "../assets/rainy.webp";

const Temperature = ({ temp }) =>{
    console.log(temp);
    return(
        <div className="temperature-card">
            {temp.weather[0].main == "Clouds"? <img src={ Clouds } alt="weather image" />:null }
            {temp.weather[0].main == "Sun" || temp.weather[0].main == "Clear" ? <img src={Sun} alt="weather image" /> : null}
            {temp.weather[0].main == "Rain"? <img src={Rain} alt="weather image" /> : null}
            <div className="Infos">
                <p> <span>Temperature</span>: { parseInt(temp.main.temp) }</p>
                <p> <span>Humidity</span>: { temp.main.humidity }</p>
                <p> <span>Wind</span>: { temp.wind.speed }</p>
                <p> <span>Weather</span>: { temp.weather[0].description }</p>
                <p> <span>Latitude</span>: { temp.coord.lat }</p>
                <p> <span>Longitude</span>: { temp.coord.lon }</p>
            </div>
        </div>
    );
}

export default Temperature;