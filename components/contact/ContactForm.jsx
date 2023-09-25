import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useRef } from "react";
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
    
    emailjs.sendForm('service_rg1tfjd', 'template_a0nyxel', formRef.current, 'JboINDisZL-aWNV7U')
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
   
  };

  return (
    <div className="form-style-one" data-aos="fade-up">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Your Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required="required"
                data-error="Name is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="email"
                placeholder="Email Address*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required="required"
                data-error="Valid email is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>


          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                type="tel"
                placeholder="Phone Number*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required="required"
                data-error="Valid phone number is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="Your message*"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required="required"
                data-error="Please,leave us a message."
                
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <button type="submit" className="btn-twentyOne fw-500 tran3s d-block">
              Send Message
            </button>
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </form>
    </div>
  );
};

export default ContactForm;
