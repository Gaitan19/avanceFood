import PropTypes from 'prop-types';

const FooterList = (props) => {
  const { customClass, children, title } = props;
  return (
    <div className={`Footer-${customClass}`}>
      <h5 className="Footer-title">
        <span>{title}</span>
      </h5>
      {children}
    </div>
  );
};

FooterList.propTypes = {
  customClass: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

FooterList.defaultProps = {
  customClass: '',
  children: <></>,
};

export default FooterList;
