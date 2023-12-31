import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ handleShowToast }) => {

  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event, e) => {
    event.preventDefault();
    console.log(formRef.current);

    emailjs.sendForm('service_2s6lqfj', 'template_o9q00ps', formRef.current, 'RwxxC2eJuelf8Ut8T')
      .then((result) => {
        handleShowToast("Message Sent!", false);
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: ""
        });
      }, (error) => {
        handleShowToast("Problem Occured!", true);
      });
    //e.target.reset();
    // You can add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Your name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="tel"
              placeholder="Phone Number*"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-15">
            <textarea
              placeholder="Your message*"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button
            type="submit"
            className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase"
          >
            SEND MESSAGE
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}

      {/* <div className="fs-16 text-center mt-25">
        <span className="opacity-75">Been here before?</span>{" "}
        <a href="#" className="tx-dark fw-500">
          Check your query
        </a>
      </div> */}
    </form>
  );
};

export default ContactForm;
