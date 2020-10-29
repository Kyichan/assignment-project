import React, {Component} from 'react';
import Header from './header';
import Nav from './nav';
import Footer from './footer';
import Banner from './banner';


class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          subject:'',
          message: ''
      }
  
      this.onNameChange = this.onNameChange.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onSubjectChange = this.onSubjectChange.bind(this);
      this.onMsgChange = this.onMsgChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }
  
    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    //   event.preventDefault();
    // }
    onNameChange(event) {
      this.setState({name: event.target.value})
  }
  onEmailChange(event) {
      this.setState({email: event.target.value})
  }
  onSubjectChange(event) {
      this.setState({subject: event.target.value})
  }
  onMsgChange(event) {
      this.setState({message: event.target.value})
  }

   handleSubmit(event) {
      alert('Name: ' + this.state.name  + ' Email: ' + this.state.email + ' Subject: ' + this.state.subject + ' Message: ' + this.state.message);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <Nav/>
            <Header/>
            <Banner/>
            <form onSubmit={this.handleSubmit} className="contact_form">
            <div className="form-group">
            <label>
                Name:                
            </label>
            <input type="text" value={this.state.name} onChange={this.onNameChange} />
            </div>

            <div className="form-group">
            <label>
                Email:                
            </label>
            <input type="email" value={this.state.email} onChange={this.onEmailChange} />
            </div>
            <div className="form-group">
            <label>
                Subject:                
            </label>
            <input type="text" value={this.state.subject} onChange={this.onSubjectChange} />
            </div>
            <div className="form-group">
            <label>
                Message:                
            </label>
            <input type="textarea" value={this.state.message} onChange={this.onMsgChange} />
            </div>
          
            <input type="submit" value="Submit" />
            </form>
            <Footer/>
        </div>
       
      );
    }
  }

  export default Contact;