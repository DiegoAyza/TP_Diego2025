import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ list }) => {
  return (
    <div className="items-grid">
      {list.length ? (
        list.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id}>
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};