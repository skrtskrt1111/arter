import styled from 'styled-components';

import { Input } from 'fwt-internship-uikit';

const InputContainer = styled.label`
background-color : var(--colors-ui-base);
padding: 0.5rem 0.5rem;
display: flex;
align-items: center;

border-radius: var(--radii);
box-shadow: var(--shadow)
width: 100%;
margin-bottom: 1rem;

@media(min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
}
`;

const input11 = styled.input.attrs({
    type: 'search',
    placeholder: 'Search..',
})`
margin-left: 2rem;
border: none;
outline: none

color: var(--color-text);
`;

export const Search = ({search, setSearch}) => {
    return (
        <InputContainer>
          <Input placeholder='search..' onChange={(e) => setSearch(e.target.value)} value={search}/>
          {/* <Input11 onChange={(e) => setSearch(e.target.value)} value={search}/> */}
        </InputContainer>
    )
}