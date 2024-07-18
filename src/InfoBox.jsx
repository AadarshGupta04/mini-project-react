import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox({info}) {
    let IMG_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1708759284407-5b9f6fc8b231?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1661770151480-f178c952b250?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1572339152406-cd1dcaa388aa?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className='cardConatiner'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}&nbsp;{
                            info.humidity > 80 
                            ? <ThunderstormIcon></ThunderstormIcon> 
                            : info.temp > 15 
                            ? <WbSunnyIcon></WbSunnyIcon> 
                            : <AcUnitIcon></AcUnitIcon>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>Temperature = {info.temp}&deg;c</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;c</p>
                            <p>Max Temp = {info.tempMax}&deg;c</p>
                            <p>the weather can be described as {info.weather} feels like {info.feels_like}&deg;c </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}