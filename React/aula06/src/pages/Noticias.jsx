import React, { useState, useEffect } from 'react';

const Noticias = () => {
  const url = "https://path_to_your_api_endpoint";

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setNoticias(data.news); 
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Noticias</h1>
      <ul>
        {noticias.map((noticia) => (
          <li key={noticia.id}>
            <h2>{noticia.titulo}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Noticias;
