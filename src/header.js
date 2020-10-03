import React from "react"
import styled from "styled-components"
import Wrapper from "./wrapper"
import {Link} from "react-router-dom"

const HeaderStyled = styled.div `
    margin-bottom:1em;
    .content{
        display: flex;
        align-items:center;
        justify-content: space-between;
    }
    h1{
        font-size:14px;
    }
    .dark-mode{
        margin-right:10px;
    }
`

const Header = () => {

    const handleClick = () => {

    }

    return ( 
        <HeaderStyled>
            <Wrapper>
                <div className="content">
                   <Link to= "/"> <h1> Where in the world</h1> </Link>
                     <div className="dark-mode">
                        <p onClick={handleClick}>
                          Dark Mode
                         </p>
                     </div>
                </div>
            </Wrapper>
        </HeaderStyled>
     );
}
 
export default Header;