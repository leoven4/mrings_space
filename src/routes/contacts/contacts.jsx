import { useState } from "react";
import './contacts.scss'
import FormInput from '../../components/form_input/form_input'
import Button from "../../components/button/button";

const defaulFormFields = {
  email: "",
  password: "",
};

const Contacts = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { email, password } = formFields;

  // const {currentUser, setCurrentUser} = useContext(UserContext);
  // const { setCurrentUser } = useContext(UserContext);


  // const resetFormField = () => {
  //   setFormFields(defaulFormFields)
  // }    

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {

  //     const {user} = await signInAuthUserWithEmailAndPassword(email, password);
  //     // setCurrentUser(user);        
  //     resetFormField();

  //   }catch(error){

  //     switch(error.code){  
  //       case 'auth/wrong-password':
  //         alert('Incorrect password or email');
  //         break;
        
  //         case 'auth/user-not-found':
  //         alert('Userr not found');
  //         break;
        
  //         default:
  //         console.log(error)
  //     }
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormFields({ ...formFields, [name]: value });

  // };

  // const signInWithGoogle = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   // setCurrentUser(user);        
  //   await creareUserDocumentFromAuth(user);
  // };


  return (
    <div className="sign_up_container">
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={()=>{}}>
        <FormInput
          label = 'Email'
          type="email"
          // reqzsuired
          name="email"
          value={email}
          onChange={()=>{}}   
        />
 
        <FormInput
          label = 'Password'
          type="password"
          // required
          name="password"
          value={password}
          onChange={()=>{}}   
        />
        
        <div className="buttons_container">
          <Button type="submit">Sign in</Button>
          <Button onClick={()=>{}} buttonType='google' type="submit">Google Sign in</Button>
        </div>
        
      </form>
    </div>
  );
};

export default Contacts;
