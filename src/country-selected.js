import React from "react"
import styled from "styled-components"

const CountrySelectedStyled = styled.div`
    margin-top: 3em;
    padding-bottom:3em;
    img{
        width:100%;
        margin-bottom: 2em;
    }
    .grid{
        display:grid;
        grid-row-gap:1em;
    }
    .border-item{
        padding:5em 2em;
        border-radius: 5px;
        margin-right: 10px;
        box-shadow: 0 0 5px rgba(0,0,0, .3)
    }
    .languages{  
        span {
            margin-right:5px;
            &:after{
                content:",";
            }
            &:last-child{
                &:after {
                    display:none;
                }
            }
        }
    }
    @media screen and (min-width:1024px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-columns-gap: 120px;
        .grid{
            grid-template-columns:1fr 1fr;
        }
    }
`

const CountrySelected = ({flag, name, nativeName, population, region, 
        subregion, capital, topLevelDomain, currencies=[], languages=[], borders=[]}) => {
    return ( 
        <CountrySelectedStyled>
            <img src={flag} alt="Bandera" />
            <div>
            <div className="grid">
                <div>
                     <h2>{name}</h2>
                     <p><strong>Native Name:</strong>{nativeName}</p>
                     <p><strong>Population:</strong>{population}</p>
                     <p><strong>Region:</strong>{region}</p>
                     <p><strong>Sub Region:</strong>{subregion}</p>
                     <p><strong>Capital:</strong>{capital}</p>
                </div>
                <div>
                    <p><strong>Top Level Domain:</strong>{topLevelDomain}</p>
                    <p><strong>Currencies:</strong>{currencies.map(item => <span>{item.name}</span>)}</p>
                    <p className="languages"><strong>Languages:</strong>{languages.map(item => <span>{item.name}</span>)}</p>
                </div>
            </div>
            </div>
            <p className="borders"><strong>Border Countries:</strong>{borders.map(item => 
                <span className="border-item">{item}</span>)}</p>
           
        </CountrySelectedStyled>
     );
}
 
export default CountrySelected;