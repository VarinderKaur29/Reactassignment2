import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form'



function SampleForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
  
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
     
  
        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" placeholder="Your Firstname" ref={register} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" placeholder="Your Lastname" ref={register} />
        </div>

        <div>
          <label htmlFor="Phone">Phone</label>
          <input name="Phone" placeholder="Your Phone" ref={register} />
        </div>

       

        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

class Form extends Component {


constructor(props) {
  super(props);
}

render() {
  return <SampleForm />;
}
}




 ReactDOM.render(<Form />, document.getElementById('root'));


 export default Form;
