import { useState } from "react";
import './contacts.scss'
import FormInput from '../../components/form_input/form_input'
import Button from "../../components/button/button";
import Footer from "../footer/footer";

let enable_submit = false;

const defaulFormFields = {
  name: "",
  email: "",
  message: "",
};

const Contacts = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  let { name, email, message } = formFields;

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const checkInput = () => {
    if (name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0 || !isValidEmail(email)){
      enable_submit = false;
    } else {
      enable_submit = true;
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });

    checkInput()
    console.log(enable_submit)
  };

  const callback = () => {

    checkInput();

    if (enable_submit)
    {
      logGet();
      sendPut();
    }
  };
  
  const logGet = async () => {
    const response = await fetch("http://localhost:8000/")
    const content = await response.json()
    console.log(content.message);
  };
  
  const sendPut = async () => {
  
    const content = {
      name: name,
      email: email,
      message: message,
    };
  
    await fetch(`http://localhost:8000/`,
    {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({content})
    });
  
  };

  return (
    <div>
      <div className="sign_up_container">
        <h2>Contact me</h2>
        <span>Please send a message</span>
        <div>

        <form action="/" onSubmit={() => {}} method="POST">
        <FormInput
            label = 'Name'
            type="name"
            name="name"
            value={name}
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
            <Button onClick={callback} type="send" disabled={false}>Send</Button>
          </div>
          </form>

        </div>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default Contacts;
