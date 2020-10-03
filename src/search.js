import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import Input from "./input"

const SearchStyled = styled.div `
    display: flex;
    position: relative;
    .close{
        position:absolute;
        right:1em;
        top:1em;
        border-radius:50%;
        border: none
    }
`

const Search = () => {

    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
    
    const filterByName = (e) =>{

        setInputValue(e.target.value)
        dispatch({
            type:"SET_COUNTRY_BY_NAME",
            payload: e.target.value
        })
    }

    const clearInput = () =>{
        dispatch({
            type:"SET_COUNTRY_BY_NAME",
            payload: ""
        })
        setInputValue("")
    }
    return ( 
        <SearchStyled>
            {
                inputValue &&
                <button className="close" onClick={clearInput}>X</button>
            }
            <Input placeholder="Search for a country" value={inputValue} onChange={filterByName} />
        </SearchStyled>
     );
}
 
export default Search;
