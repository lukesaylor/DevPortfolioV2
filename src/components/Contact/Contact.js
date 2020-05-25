import React from 'react';
import './Contact.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mailicon from '../../Assets/Mailicon.png';
import Phoneicon from '../../Assets/Phoneicon.png';


 
 

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
          url:"https://sayloremailapi.azurewebsites.net/", 
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
                    <Container  className="mx-auto mt-2">
                        <Container>
                            <Row className="justify-content-center"> 
                              <Col md={4} className="d-flex justify-content-center">
                                <img className="w-30" src={Mailicon} alt="Email"/>
                                <a style={{"color":"inherit"}}href="mailto: lsaylor@email.com">Lsaylor@email.com</a>
                              </Col>
                              <Col md={{ span: 4, offset: 4 }} className="d-flex justify-content-center">
                                <img className="w-30" src={Phoneicon} alt="Phone"/>
                                <p>302-339-2012</p>
                              </Col>
                            </Row>
                        </Container>
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
                    </Container>
                    <Container  className="pb-2">
                        <label>Message:</label>
                        <textarea className="form-control" rows="8" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </Container>
                    <Container  className="d-flex justify-content-center p-5"  >
                      <Button style={{'height':"50px"}} type="submit" className="Submitbutton">Submit</Button>
                    </Container>
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