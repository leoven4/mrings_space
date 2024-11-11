import { useState } from "react";
import './contacts.scss'
import FormInput from '../../components/form_input/form_input'
import Button from "../../components/button/button";
import Footer from "../footer/footer";
import emailjs from 'emailjs-com';


const Contacts = () => {

  const [formFields, setFormFields] = useState({
    user: '',
    email: '',
    message: '',
  });

  let { user, email, message } = formFields;

  let enable_submit = false;

  const sendEmail = (e) => {
    e.preventDefault();

    checkInput();
    
    // Send email via EmailJS
    if (enable_submit){
      emailjs.send('service_ji5hq6q', 'template_gbeenxt', formFields, 'fFz_GsfwNcDyDBBxm')
      .then((response) => {
        console.log('Success:', response);
        alert('Your message has been sent!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send your message, please try again later.');
      });
    }

  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const checkInput = () => {
    if (user.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0 || !isValidEmail(email)){
      enable_submit = false;
    } else {
      enable_submit = true;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });

    checkInput()
    // console.log(enable_submit)
  };

  return (
    <div>
      <div className="sign_up_container">
        <h2>Contact me</h2>
        <span>Please send a message</span>
        <div>

        {/* <form action="/" onSubmit={() => {}} method="POST"> */}
        <FormInput
            label = 'Name'
            type="name"
            name="user"
            value={user}
            required
            onChange={handleChange}   
          />

          <FormInput
            label = 'Email'
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}   
          />
  
          <FormInput
            label = 'Message'
            type="message"
            name="message"
            value={message}
            required
            onChange={handleChange}   
          />

          <div className="buttons_container">
            <Button onClick={sendEmail} type="send" disabled={false}>Send</Button>
          </div>
          {/* </form> */}

        </div>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default Contacts;
