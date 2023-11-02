import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react';
import { v4 } from 'uuid';
import Banner from '../Banner';
import Layout from '../Layout';
import { questionsList } from '@/constants/faqs';

const Faqs = () => {
  const renderItemsQuestions = (itemQuestions) =>
    itemQuestions.map((itemQuestion) => (
      <CAccordionItem
        key={v4()}
        itemKey={itemQuestion.id}
        className="Faqs-accordion-item"
      >
        <CAccordionHeader className="Faqs-accordion-header">
          {itemQuestion.questionTitle}
        </CAccordionHeader>
        <CAccordionBody className="Faqs-accordion-body">
          {itemQuestion.questionText}
        </CAccordionBody>
      </CAccordionItem>
    ));

  const renderQuestions = () =>
    questionsList.map((questionsItem) => (
      <div className="Faqs-item">
        <h3 className="Faqs-item-title">{questionsItem.text}</h3>

        <CAccordion key={v4()} flush className="Faqs-accordion">
          {renderItemsQuestions(questionsItem.questions)}
        </CAccordion>
      </div>
    ));

  return (
    <Layout headPageTitle="Faqs-Foodingly">
      <Banner title="Faqs" page="Faqs" />
      <div className="Food">
        <div className="Food-content">
          <h2 className="Food-title">Frequent answer and question</h2>
          <div className="Faqs-container">
            <div className="Faqs-container-left">{renderQuestions()}</div>
            <div className="Faqs-container-right"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faqs;
