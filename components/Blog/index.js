import { v4 } from 'uuid';
import Pagination from '@mui/material/Pagination';
import { authorsBlogs } from '@/constants/blogsList';
import Banner from '../Banner';
import Layout from '../Layout';
import AuthorCard from './AuthorCard';

const Blog = () => {
  const renderAuthorsBlogs = () => {
    return authorsBlogs.map((authorBlog) => (
      <AuthorCard key={v4()} author={authorBlog} />
    ));
  };

  return (
    <Layout headPageTitle="Blog">
      <Banner title="Blog" page="Blog" />
      <div className="Authors">
        <div className="Authors-content">
          <div className="Authors-cards">{renderAuthorsBlogs()}</div>
          <Pagination className="Authors-pagination" count={3} />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
