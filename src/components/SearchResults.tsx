import { useMemo } from 'react';

import { ProductItem } from './ProductItem';

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
};

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <>
      <h2>Total: {totalPrice}</h2>
      <div>
        {results.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
