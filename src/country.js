import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import slugify from "slugify"

const CountryStyled = styled.div `
    cursor: pointer;
    text-align: left;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 7px 2px rgba(0,0,0,.1);
    &:hover .details{
        border : 1px solid gray;
        border-top:none;
    }
    img{
        width: 100%;
        height: 160px;
        object-fit: cover;
        vertical-align: top;
    }
    .details{
        padding: 1.5em;
    }
    h2{
        margin: 0;
        margin-bottom: 1rem;
        font-size: 18px;
    }
    p{
        font-size: .9em;
        margin-bottom: .5rem;
    }

`

const Country = ({flag, name, population, region, capital}) => {

    const history = useHistory()

    const handleClick = () =>{
        history.push(`/country/${slugify(name)}`)
    }
    
    return ( 
      
        <CountryStyled onClick={handleClick}>
            <img loading="lazy" src={flag} alt="Bandera Argentina" />
            <div className="details">
                <h2>{name}</h2>
                <p><strong>Population:</strong>{population}</p>
                <p><strong>Region:</strong>{region}</p>
                <p><strong>Capital:</strong>{capital}</p>
            </div>
        </CountryStyled>
        
     );
}
 
export default Country;