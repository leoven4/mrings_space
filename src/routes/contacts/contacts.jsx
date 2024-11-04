import { useState } from "react";
import './contacts.scss'
import FormInput from '../../components/form_input/form_input'
import Button from "../../components/button/button";
import Footer from "../footer/footer";

const defaulFormFields = {
  name: "",
  email: "",
  message: "",
};

const Contacts = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { name, email, message } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });

  };

  return (
  <div>
    <div className="sign_up_container">
      <h2>Contact me</h2>
      <span>Please send a message</span>
      <form onSubmit={()=>{}}>
 
       <FormInput
          label = 'Name'
          type="name"
          // required
          name="name"
          value={name}
          onChange={handleChange}   
        />

        <FormInput
          label = 'Email'
          type="email"
          // reqzsuired
          name="email"
          value={email}
          onChange={handleChange}   
        />
 
        <FormInput
          label = 'Message'
          type="message"
          // required
          name="message"
          value={message}
          onChange={handleChange}   
        />
        
        <div className="buttons_container">
          <Button onClick={()=>{}} type="send">Send</Button>
        </div>
        
      </form>
    </div>
      <Footer></Footer>
  </div>
  );
};

export default Contacts;
