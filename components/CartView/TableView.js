import { v4 } from 'uuid';
import { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import { tableHeaders } from '@/constants/cartView';
import { foodinglyContext } from '../../context/FoodinglyContext';
import Button from '../Button';

const TableView = () => {
  const { productsCart, deleteProductCart, handleProductQuantity } =
    useContext(foodinglyContext);

  const getTotalFood = (quantity, price) => quantity * price;

  const handleOnchangeQuantity = (event) => {
    const {
      target: { value, id },
    } = event;

    handleProductQuantity(id, value);
  };

  const renderTableHeaders = () =>
    tableHeaders.map((tableHeader) => (
      <th key={v4()} className="View-table-header">
        {tableHeader}
      </th>
    ));

  const renderTableBody = () =>
    productsCart.map((cartProduct) => (
      <tr key={v4()} className="View-table-rows">
        <td className="View-table-item">
          <Button
            customClass="View-trash"
            onClick={() => deleteProductCart(cartProduct)}
          >
            <FaRegTrashAlt />
          </Button>
        </td>

        <td className="View-table-image">
          <Image
            className="View-image"
            width={92}
            height={92}
            alt={cartProduct.name}
            src={cartProduct.image}
          />
        </td>

        <td className="View-table-name">{cartProduct.name}</td>
        <td className="View-table-price">{`$${cartProduct.price}`}</td>
        <td className="View-table-quantity">
          Quantity
          <input
            className="View-input-quantity"
            id={cartProduct.id}
            type="number"
            defaultValue={cartProduct.quantity}
            min={1}
            onChange={handleOnchangeQuantity}
          />
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
