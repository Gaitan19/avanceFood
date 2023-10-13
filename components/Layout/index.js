import PropTypes from 'prop-types';
import Header from '../Header';

const Layout = (props) => {
  const { children } = props;

  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: <></>,
};

export default Layout;
