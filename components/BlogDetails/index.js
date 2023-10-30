import { v4 } from 'uuid';
import { blogComents, recentBlogs } from '@/constants/blogsList';
import Banner from '../Banner';
import Layout from '../Layout';
import Historical from './Historical';
import Comments from './Comments';
import CommentForm from './CommentForm';
import DetailsRight from './DetailsRight';
import RecentBlog from './RecentBlog';

const BlogDetails = () => {
  const renderComments = () =>
    blogComents.map((comment) => (
      <Comments
        image={comment.image}
        name={comment.name}
        text={comment.text}
        key={v4()}
      />
    ));

  const renderRecentBlogs = () =>
    recentBlogs.map((recentBlog) => (
      <RecentBlog
        key={v4()}
        image={recentBlog.image}
        text={recentBlog.text}
        date={recentBlog.date}
      />
    ));

  return (
    <Layout headPageTitle="BlogDetails">
      <Banner title="Blog" page="Blog Details" />
      <div className="Details">
        <div className="Details-content">
          <div className="Details-historical">
            <Historical />
            <div className="Details-comments">
              <h3 className="Details-comments-counter">{`${blogComents.length} Comments`}</h3>
              <div className="Details-comments-list">{renderComments()}</div>
            </div>
            <CommentForm />
          </div>
          <div className="Details-right">
            <DetailsRight title="Recent Blogs">
              {renderRecentBlogs()}
            </DetailsRight>
            <DetailsRight title="Popular tags" />
            <DetailsRight title="Share causes" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
