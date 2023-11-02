import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Banner from '../Banner';
import Layout from '../Layout';
import { termsList } from '@/constants/terms';

const PolicyTerms = (props) => {
  const { headPage, title, page } = props;

  const renderTerms = () =>
    termsList.map((term) => (
      <div className="Terms-item" key={v4()}>
        <h4 className="Terms-titles">{term.title}</h4>
        {term.texts.map((text) => (
          <p className="Terms-text" key={v4()}>
            {text}
          </p>
        ))}
      </div>
    ));

  return (
    <Layout headPageTitle={headPage}>
      <Banner title={title} page={page} />
      <div className="Food">
        <div className="Food-content Terms-content">{renderTerms()}</div>
      </div>
    </Layout>
  );
};

PolicyTerms.propTypes = {
  headPage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default PolicyTerms;
