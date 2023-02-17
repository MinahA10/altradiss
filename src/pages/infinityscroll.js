import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts=${page}`)
      .then(response => {
        setData([...data, ...response.data]);
          setLoading(false);
          
      });
  }, [page]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setPage(page + 1);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
      {loading && <div>Chargement...</div>}
    </div>
  );
}

export default InfiniteScroll;
