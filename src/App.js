import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import House1 from './components/House1';
import SearchFilter from './components/SearchFilter';
import {Routes , Route} from 'react-router-dom';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';

function App() {

  let [allHouses,setAllHouses] = useState([]);

  useEffect(() => {
    async function getHousesInfo(){
      let res = await fetch('houses.json');
      let data = await res.json();
      //console.log(data);
      setAllHouses(data);
    }
    getHousesInfo();
  },[]);


  return (
    <div className="App bg-secondary">
        <Header/>
        <SearchFilter houses={allHouses}/>

        <Routes>
          <Route path ="/" element={<House1 houses={allHouses}/>} />
          <Route path="searchresults/:county" element={<SearchResults houses={allHouses}/>} />
          <Route path="searchedhouse/:id" element={<SearchedHouse houses={allHouses}/>} />
        </Routes>

    </div>

    
  );
}

export default App;
