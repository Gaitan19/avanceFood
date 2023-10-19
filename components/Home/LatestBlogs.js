import { blogs } from '@/constants/blogsList';
import BlogCard from './BlogCard';

const LatestBlogs = () => {
  const renderBlogs = () =>
    blogs.map((blog) => <BlogCard key={blog.title} blog={blog} />);

  return (
    <div className="Blog">
      <div className="Blog-content">
        <h3 className="Blog-title">Our Blog</h3>
        <h2 className="Blog-text">Our latest blogs and blogs</h2>
        <div className="Blog-cards">{renderBlogs()}</div>
      </div>
    </div>
  );
};

export default LatestBlogs;
