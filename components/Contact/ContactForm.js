import Button from '../Button';

const ContactForm = () => {
  return (
    <div className="Contact Contact-form">
      <div className="Contact-content">
        <h2 className="Contact-title">Leave us a message</h2>

        <form className="Contact-message-form">
          <div>
            <input
              className="Contact-message-input"
              type="text"
              placeholder="First Name"
              required
            />
          </div>

          <div>
            <input
              className="Contact-message-input"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div>
            <input
              className="Contact-message-input"
              type="tel"
              placeholder="Phone"
              required
            />
          </div>

          <div>
            <textarea
              className="Contact-message-input Contact-message-task"
              name="message"
              type="text"
              placeholder="Write message"
              required
            />
          </div>

          {/* <Input type="submit" className="button secondary" value="Send Messag" /> */}
          <Button buttonType="submit" customClass="Button-fill">
            <span className="Button-fill-text">Send Message</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
