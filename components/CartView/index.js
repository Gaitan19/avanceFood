import Banner from '../Banner';
import Layout from '../Layout';
import TableView from './TableView';

const CartView = () => {
  return (
    <Layout headPageTitle="Cart view">
      <Banner title="Cart view" page="Cart view" />

      <div className="Food">
        <div className="Food-content View-content">
          <div className="Food-container View-container">
            <TableView />
            <div className="View-container-left"></div>
            <div className="View-container-right"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartView;
