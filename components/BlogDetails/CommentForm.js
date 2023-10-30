import { useState } from 'react';
import { blogComents } from '@/constants/blogsList';
import Button from '../Button';

const CommentForm = () => {
  const [userName, setUserName] = useState('');
  const [userComment, setUserComment] = useState('');

  const handleChangeName = (input) => {
    const {
      target: { value },
    } = input;
    setUserName(value);
  };

  const handleChangeComment = (input) => {
    const {
      target: { value },
    } = input;
    setUserComment(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    blogComents.push({
      image: blogComents[0].image,
      name: userName,
      text: userComment,
    });
  };

  return (
    <form className="Details-form" onSubmit={handleSubmit}>
      <h3>Leave a comment</h3>

      <div className="Details-form-container">
        <input
          className="Details-input"
          type="text"
          placeholder="First Name"
          required
          onChange={handleChangeName}
        />

        <input
          className="Details-input"
          type="email"
          placeholder="Enter email addres"
          required
        />
      </div>

      <textarea
        className="Details-input Details-input-comment"
        type="text"
        placeholder="Write your comment"
        required
        onChange={handleChangeComment}
      />

      <Button buttonType="submit" customClass="Button-fill">
        <span className="Button-fill-text">Post comment</span>
      </Button>
    </form>
  );
};

export default CommentForm;
