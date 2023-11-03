import { v4 } from 'uuid';
import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import { tableHeaders } from '@/constants/cartView';
import { foodinglyContext } from '../../context/FoodinglyContext';
import Button from '../Button';

const TableView = () => {
  const { productsCart, deleteProductCart } = useContext(foodinglyContext);

  //   const getTotalPrice = () =>
  //     productsCart.reduce(
  //       (total, product) => total + product.price * product.quantity,
  //       0,
  //     );

  const getTotalFood = (quantity, price) => quantity * price;

  const renderTableHeaders = () =>
    tableHeaders.map((tableHeader) => (
      <th key={v4()} className="View-table-header">
        {tableHeader}
      </th>
    ));

  const renderTableBody = () =>
    productsCart.map((cartProduct) => (
      <tr key={v4()}>
        <td className="View-table-item">
          <Button
            customClass="Cart-delete View-trash"
            onClick={() => deleteProductCart(cartProduct)}
          >
            <FaTrashAlt />
          </Button>
        </td>

        <td className="View-table-image">
          <Image
            className="View-image"
            width={100}
            height={100}
            alt={cartProduct.name}
            src={cartProduct.image}
          />
        </td>

        <td className="View-table-name">{cartProduct.name}</td>
        <td className="View-table-price">{`$${cartProduct.price}`}</td>
        <td className="View-table-quantity">
          Quantity
          <input type="number" defaultValue={cartProduct.quantity} min={1} />
        </td>
        <td>${getTotalFood(cartProduct.quantity, cartProduct.price)}</td>
      </tr>
    ));

  return (
    <div className="View-container-table">
      <table className="View-table">
        <thead className="View-table-headers">
          <tr>{renderTableHeaders()}</tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default TableView;
