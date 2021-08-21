import { memo, useState } from 'react';
import dynamic from 'next/dynamic';

import { AddProductToListProps } from './AddProductToList';

// import { AddProductToList } from './AddProductToList';

const AddProductToList = dynamic<AddProductToListProps>(
  async () => {
    return import('./AddProductToList').then((mod) => mod.AddProductToList);
  },
  {
    // eslint-disable-next-line react/display-name
    loading: () => <span>Carregando...</span>,
  }
);

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  };
  addToList: (id: number) => void;
};

function ProductItemComponent({ product, addToList }: ProductItemProps) {
  const [isAddingToList, setIsAddingToList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button type="button" onClick={() => setIsAddingToList(true)}>
        Adicionar a lista
      </button>
      {isAddingToList && (
        <AddProductToList
          onRequestClose={() => setIsAddingToList(false)}
          addToList={() => addToList(product.id)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
