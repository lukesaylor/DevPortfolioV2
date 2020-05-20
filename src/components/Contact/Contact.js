import React from 'react';
import './Contact.css';
import axios from 'axios'


 
 

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }

    handleSubmit(e){
        e.preventDefault();
    
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent."); 
             
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }

  
        render() {
        return(
            <div className="Contactcontainer">
                <h1 className="Contactheader">Contact</h1>
                <form className="Contactform" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="Contactform-topcontainer">
                        <div className="Contactform-info">
                            <p>Email: Lsaylor@email.com</p>
                            <p>Phone: 1-302-339-2012</p>

                        </div>
                        <div className="Contactform-inputs">
                            <div className="Contactform-input">
                                <label htmlFor="name">Name: </label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                            </div>
                            <div className="Contactform-input">
                                <label htmlFor="exampleInputEmail1">Email address: </label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                            </div>
                        </div>
                    </div>
                    <div className="Contactform-message">
                        
                        <textarea className="form-control" rows="12" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="Submitbutton">Submit</button>
                </form>
            </div>
        );
        }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }

}
  
   
  
  export default Contact;