import { FaChevronUp } from 'react-icons/fa';
import Button from '.';

const GoTop = () => {
  return (
    <Button customClass="Button-top">
      <FaChevronUp className="Button-top-icon" />
    </Button>
  );
};

export default GoTop;
