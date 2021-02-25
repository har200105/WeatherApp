import React from 'react';
import {useState,useEffect} from 'react';
import './css/style.css';


const Tempapp=() => {
    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Biratnagar");
    useEffect( ()=>{
        const fetchApi=async ()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;    
            const result = await fetch(url);
            // console.log(result);
            const res = await result.json();
            // console.log(res);
            setCity(res.main);
        }
        
        fetchApi();
    },[search]);
    
    // console.log(city);
    return ( 
        <div className="box">
        <div>
        <div className="inputData">
        <input type="Search" className="inputFeild" value={search}
        onChange={(event)=>{
            setSearch(event.target.value);
        }} />
        </div>
        </div>
        {!city ? (
            <p>No Data Found !!</p> 
            ) : (
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>
            {search}
            </h2>
            <h1 className="temp">
            {city.temp}° cel
            </h1>
            <h3 className="tempmin_max">
            Min:{city.temp_min}° cel | Max : {city.temp_max}° cel
            </h3>
            </div>
            <div className="wave">
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
            </div>
        )}    
        </div>
    )
    }

export default Tempapp;