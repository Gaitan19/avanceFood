import PropTypes from 'prop-types';

const CartViewItem = (props) => {
  const { title, children } = props;

  return (
    <div className="View-container-item">
      <div className="View-item">
        <h3 className="Food-details-title">{title}</h3>
        {children}
      </div>
    </div>
  );
};

CartViewItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

CartViewItem.defaultProps = {
  children: <></>,
};

export default CartViewItem;
