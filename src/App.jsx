import { useState } from 'react'
import './App.css'
import Details from './components/Details'
import List from './components/List'
import useFetch from './hooks/useFetch';



function App() {
  const [id, setId] = useState(null);
  // const [data, setData] = useState(null);
  // const [detailsData, setdetailsData] = useState(null);
  const listURL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
  const detailsURL = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`;

  const {data: data} = useFetch(listURL);
  const {data: detailsData} = useFetch(detailsURL);

  const handleClick = (id) => {
    console.log(id);
    setId(id);
  }

  return (
    <>
      {data && <List data={data} onClick={handleClick}/>}
      {detailsData && <Details info={detailsData}/>}
    </>
  )
}

export default App
