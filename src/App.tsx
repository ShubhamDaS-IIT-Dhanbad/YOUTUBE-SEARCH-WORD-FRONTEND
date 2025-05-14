import { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import type { SearchResult } from './types';

function App() {
  const [results, setResults] = useState<SearchResult[]>([]);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8">YouTube Word Search</h1>
      <SearchForm onResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;