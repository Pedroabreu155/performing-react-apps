export type AddProductToListProps = {
  addToList: () => void;
  onRequestClose: () => void;
};

export function AddProductToList({
  addToList,
  onRequestClose,
}: AddProductToListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={addToList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
