import React from "react";
import axios from 'axios'
import { useEffect } from "react";
import './Body.css'

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";

function Body(){

    const[items,setitems]=useState([])

    useEffect(()=>{

        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res)=>{
            console.log(res.data);
            setitems(res.data.meals)
        }).catch((error)=>{
            console.log('error')
        })
    },[])

    const itemslist=items.map((obj)=>{
        return <div className="col-md-4">
            <p>
                {obj.strMeal}
            </p>
            <img src={obj.strMealThumb} className="img-fluid"/>
            <p>{obj.idMeal}</p>
        </div>
    })


    return <div>

        <div className="row">

        {itemslist}

        </div>

    </div>
}
export default Body