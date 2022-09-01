import axios from 'axios';

import { useState, useEffect } from 'react';
import './App.css';
import { Controls } from './components/Controls';
import {Header} from './components/Header';
import { Main } from './components/Main';
import { List} from './components/List'
import { Card } from './components/Card';
import { ALL_PAINTINGS } from './config';
import {Paintings} from './components/Paintings'
import {Pagination} from './components/Pagination';

function App() {
 const [paintings, setPaintings] = useState([]);

 const [currentPage, setCurrentPage] = useState(1)
 const [paintingsPerPage] = useState(9)

 const lastPaintingsIndex = currentPage * paintingsPerPage
 const firstPaintingsIndex = lastPaintingsIndex - paintingsPerPage
 const currentPaintings = paintings.slice(firstPaintingsIndex, lastPaintingsIndex)

 const paginate = pageNumber => setCurrentPage(pageNumber)
 const nextPage = () => setCurrentPage( prev=> prev + 1)
 const prevPage = () => setCurrentPage( prev=> prev - 1)

  return (
    <>
    <Header />
    <Main>
      <Paintings paintings={currentPaintings} setPaintings={setPaintings}/>
      <Pagination 
        paintingsPerPage={paintingsPerPage}
        totalPaintigns={paintings.length}
        paginate={paginate}
      />
      <div className="pagination-link--wide ms-2" onClick={nextPage}>Next page</div>
      <div className="pagination-link--wide" onClick={prevPage}>Prev page</div>
      

    </Main>
    </>
  );
}

export default App;
