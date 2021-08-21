import Head from 'next/head';

import { FormEvent, useState } from 'react';
import { SearchResults } from '../components/SearchResults';

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <>
      <Head>
        <title>Performing</title>
      </Head>
      <h1>Performing apps</h1>
      <h2>Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <SearchResults results={results} />
    </>
  );
}
