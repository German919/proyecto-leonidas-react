import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Country from "./country"
import {useSelector, useDispatch} from "react-redux"

const CountryListStyled = styled.div `
    display: grid;
    grid-row-gap: 2.3em;
    background: #eef3f5;
    justify-content: center;
    border: 1px solid red;
    padding: 4em 2em;
`

const CountryList = () => {

    const dispatch = useDispatch()

    const countryList = useSelector(state => state.countryList)
    console.log("Este es el estado ", countryList)

    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
          .then( res => res.json())
            .then( list => (
                dispatch({
                    type:"SET_COUNTRY_LIST",
                    payload: list
                })
            ))
          .catch((err) => console.log("Hubo un error" , err))
    },[])

    const mostrar = () =>{

        let region = document.getElementById("country").value
        let countries = countryList.filter(country => country.region === region)

        dispatch({
            type:"SET_COUNTRY_REGION",
            payload: countries
        })
        
        console.log(countries)
    } 

    return ( 
        <CountryListStyled>
            <input id="country" placeholder="Ingrese region a buscar"/>
            <button onClick={()=>mostrar()}>Mostrar</button>
            {
                countryList.map(({flag, name, population, region, capital}) =>(
                    <Country
                         flag={flag}
                         name={name}
                         key={name}
                         population={population}
                         region={region}
                         capital={capital}
                     />
                ))
            }
            
        </CountryListStyled>
     );
}
 
export default CountryList;