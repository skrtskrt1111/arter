import { useState,useEffect } from 'react'
import { Search} from './Search'
import styled from 'styled-components'

import { CSelect } from './CSelect'


const options = [
    {
        "value": 1,
        "label": "Ivan Aivazovsky"
      },
      {
        "value": 2,
        "label": "François Boucher"
      },
      {
        "value": 3,
        "label": "Leonardo da Vinci"
      },
      {
        "value": 4,
        "label": "Edvard Munch"
      },
      {
        "value": 5,
        "label": "Rembrandt Harmenszoon van Rijn"
      },
      {
        "value": 6,
        "label": "Vincent van Gogh"
      },
      {
        "value": 7,
        "label": "Sandro Botticelli"
      },
      {
        "value": 8,
        "label": "Ivan Shishkin"
      },
      {
        "value": 9,
        "label": "Peter Paul Rubens"
      },
];

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

@media( min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
`;

export const Controls = ({onSearch}) => {
    const [search, setSearch] = useState('')
    const [authorId, setAuthorId] = useState ('');
    const [value, setValue] = useState ('');

      useEffect(() => {
        const createdValue = authorId?.value || '';
        onSearch(search, createdValue);
      }, [search, authorId]);


    return (
        <Wrapper>

            <Search search={search} setSearch={setSearch}/>
            <CSelect  options={options} placeholder="Filter by Author " 
            isClearable 
            isSearchable={true}
            value={authorId}
            onChange={setAuthorId}
            />
        </Wrapper>
    )
}