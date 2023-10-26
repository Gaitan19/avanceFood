import Button from '../Button';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event);
  };
  //   const schema = Yup.object({
  //     name: Yup.string().min(4, 'Name to short').required('Name is Required'),
  //     email: Yup.string()
  //       .email('Invalid email address')
  //       .required('Email is Required'),
  //     phone: Yup.number()
  //       .positive('Must be positive number')
  //       .integer('Write a valid number')
  //       .typeError('Must be number'),
  //     message: Yup.string().max(1000).min(30).required('Write a message'),
  //   });

  //   const initialValues = {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: '',
  //   };

  return (
    <div className="Contact">
      <div className="Contact-content">
        <h2 className="Contact-title">Leave us a message</h2>

        <form className="Contact-message-form" onSubmit={handleSubmit}>
          <div className="Contact-message-input">
            <input name="name" type="text" placeholder="First Name" />
          </div>

          <div className="Contact-message-input">
            <input name="email" type="email" placeholder="Email Address" />
          </div>

          <div className="Contact-message-input">
            <input name="phone" type="tel" placeholder="Phone" />
          </div>

          <div className="Contact-message-input">
            <input
              as="textarea"
              name="message"
              type="text"
              placeholder="Write message"
              customClass="message"
            />
          </div>

          {/* <Input type="submit" className="button secondary" value="Send Messag" /> */}
          <Button buttonType="submit" customClass="Buttton-fill">
            <span className="Button-fill-text"></span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
