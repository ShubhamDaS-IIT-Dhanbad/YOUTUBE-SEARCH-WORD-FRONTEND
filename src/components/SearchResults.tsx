import type { SearchResult } from '../types';

interface SearchResultsProps {
  results: SearchResult[];
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <div className="mt-8 w-full max-w-3xl">
      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      {results.length === 0 ? (
        <p className="text-gray-400">No results found.</p>
      ) : (
        <div className="grid gap-4">
          {results.map((result, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium">Term: {result.term}</h3>
              <p className="text-gray-300">Count: {result.count}</p>
              <p className="text-gray-300">Timestamps: {result.timestamps.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}