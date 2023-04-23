import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4d1dd5af7bmsh75435a776293174p1855d3jsn2322a239177e',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
};
console.log(data);
if(!data) return <h1>Loading......</h1>
  return (
    <div>
        {/* {
            Object.values(data).map((songs)=>{
                console.log(songs);
            })
        } */}
      
    </div>
  );
}

export default App;
