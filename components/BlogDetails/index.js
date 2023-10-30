import Banner from '../Banner';
import Layout from '../Layout';
import Historical from './Historical';

const BlogDetails = () => {
  return (
    <Layout headPageTitle="BlogDetails">
      <Banner title="Blog" page="Blog Details" />
      <div className="Details">
        <div className="Details-content">
          <div className="Details-historical">
            <Historical />
          </div>
          <div className="Details-right"> hola</div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
