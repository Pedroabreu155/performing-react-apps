import { memo } from 'react';

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  };
  addToList: (id: number) => void;
};

function ProductItemComponent({ product, addToList }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button type="button" onClick={() => addToList(product.id)}>
        Add to list
      </button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
