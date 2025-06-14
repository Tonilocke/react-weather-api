import { useState } from "react";
const Form = ({ setTemp }) =>{
    
    const [city, setCity] = useState();
    const [inputValue, setInputValue] = useState("");
    async function fetchApi(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`);
        const result = await response.json();
        setTemp(result);
    }
    function handleSubmit(e){
        e.preventDefault();
        e.target.value = "";
    }
    return(
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input type="text" onChange={(e)=>setCity(e.target.value)} placeholder="Place"  />
            <input type="submit" value="Check place" onClick={()=> fetchApi() } />
        </form>
    );
}

export default Form;