import React, {useState, useEffect} from 'react';
import PokemanList from './component/pokemanList';
import Pagination from './component/pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pokeman, setpokeman] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }
      ).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
    setpokeman(res.data.results.map(p => p.name))
  })
  return () => cancel()

  }, [currentPageUrl])

  function gotoNextPageUrl() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPageUrl() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return " still loading..."

  
  return (
    <div>
    
    <PokemanList pokeman={pokeman} />
    <Pagination  
    gotoNextPageUrl={nextPageUrl ? gotoNextPageUrl : null  }
    gotoPrevPageUrl={ prevPageUrl ? gotoPrevPageUrl : null}
    />
    </div>
  );
}

export default App;
