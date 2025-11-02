import React, { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true); // ✅ لتتبع حالة الـ component

  useEffect(() => () => {
    isMounted.current = false; // 🔸 لما الـ component يتفك
  }, []);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    // eslint-disable-next-line no-shadow
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message,
    };

    try {
      await client.create(contact);

      if (isMounted.current) { // ✅ تأكد أن الـ component مازال موجود
        toast.success('Message sent successfully 🎉');
        setIsFormSubmitted(true);
      }
    } catch (err) {
      if (isMounted.current) {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">hello@micael.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch! 💬</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
