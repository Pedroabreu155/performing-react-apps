import { useMemo } from 'react';
import { List, ListRowRenderer } from 'react-virtualized';

import { ProductItem } from './ProductItem';

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  addToList: (id: number) => void;
};

export function SearchResults({ results, addToList }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem addToList={addToList} product={results[index]} />
      </div>
    );
  };

  return (
    <>
      <h2>Total: {totalPrice}</h2>
      <div>
        <List
          height={300}
          rowHeight={30}
          width={900}
          overscanRowCount={5}
          rowCount={results.length}
          rowRenderer={rowRenderer}
        />
      </div>
    </>
  );
}
