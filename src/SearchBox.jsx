import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "bae34b1557dbfed817e3ab83d7997a85";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (error) {
           setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form>
                <TextField
                    id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    required
                    onChange={handleChange}
                />
                <br></br><br></br>
                <Button variant="contained" type='submit' onClick={handleSubmit}>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exist!</p>}
            </form>
        </div>
    )
}