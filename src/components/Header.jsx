import styled from "styled-components"
import { useEffect, useState } from "react";
import { Container } from "./Container"
import logo from '../img/icon_white.png';
import witch from '../img/Vector.png';
import gitch from '../img/Vvector.png';

const HeaderEl = styled.header`

`;

const Wrapper = styled.div`
display: flex;
justyify-content: space-between;
align-items: center;
padding: 2rem 0;
`;



const ModeSwitcher = styled.div`
color: var(--colors-text);
font-size: var(--fs-sm);
cursor: pointer;
font-weight: var(--fw-bold);
position: absolute;
right: 10%;
top: 8%;
bottom: 0%;
float: left;
size: 20px;
`;


export const Header = () => {

    const [theme , setTheme] = useState('dark');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() =>{
        document.body.setAttribute('data-theme', theme)
    },[theme]);

    return (
        <HeaderEl>
            <Container>
            <Wrapper>
                <img src={logo}></img>
                <ModeSwitcher onClick={toggleTheme}>
                    <img src={witch}></img>
                    
                    
                    theme
                </ModeSwitcher>
            </Wrapper>

            </Container>
        </HeaderEl>
        )
    
};