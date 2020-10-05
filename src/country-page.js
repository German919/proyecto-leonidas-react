import React,{useEffect, useState} from "react"
import styled from "styled-components"
import {useSelector} from "react-redux"
import CountrySelected from "./country-selected"
import Wrapper from "./wrapper"
 
const CountryPageStyled = styled.div `
    .back{
        background: white;
        box-shadow:0 0 10px black;
        padding: .5em 2em;
        border-radius: 5px;
        border: none;
    }
`

const CountryPage = ({match, history}) => {

    let DBcountry = useSelector(state => state.countryList.find(item => item.name === match.params.id))
    const  [country, setCountry] = useState(DBcountry)
 
    useEffect(() => {
        if(!country){
            fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
            .then( res => res.json())
            .then( data => setCountry(data[0]))
            .catch(err => console.log("ERROR: ", err))
        }
        
    }, [country, match.params.id])

    function handleClick(){
        history.goBack()
    }

    return (
        <CountryPageStyled>
            <Wrapper>
                <button className="back" onClick={()=>handleClick()}>Back</button>
                <CountrySelected {... country}/>
            </Wrapper>
        </CountryPageStyled>
      );
}
 
export default CountryPage;