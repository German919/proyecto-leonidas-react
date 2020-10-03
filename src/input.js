import React from "react"
import styled from "styled-components"

const inputStyled = styled.label `
    display: inline-flex;
    background:white;
    align-items:center;
    padding: 0 2rem;
    box-shadow: 0 2px 9px 0 rgba(0,0,0, .05);
    border-radius: 5px;
    width:100%;
    input{
        flex:1;
        border-radius: 5px;
        border:none;
        height:48px;
        line-height:48px;
        outline:0;
        font-size: .7em;
    }
`

const Input = ({...props}) => {
    return ( 
        <inputStyled>
            <input type="text" {...props}/>
        </inputStyled>
     );
}
 
export default Input;