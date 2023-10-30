import PropTypes from 'prop-types';

const DetailsRight = (props) => {
  const { title, customClass, children } = props;

  return (
    <div className="Details-right-item">
      <h3 className="Details-right-title">{title}</h3>
      <div className={customClass}>{children}</div>
    </div>
  );
};

DetailsRight.propTypes = {
  title: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
  children: PropTypes.node,
};

DetailsRight.defaultProps = {
  children: <></>,
};

export default DetailsRight;