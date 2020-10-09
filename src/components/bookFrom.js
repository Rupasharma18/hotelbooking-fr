import Axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom'

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile_number: '',
      email: '',
      enterDate: '',
      exitDate: '',
      error: '',
      thankyou: false
    };

  
  }

  isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  isValidMobile(mobileno) {
    return /^[6-9]\d{9}$/.test(mobileno);
  }

  validateField =(field, value)=> {
    if (value.length <= 0) {
      return <div className="alert alert-danger"><span className="text-capitalize">{field}</span> is required field.</div>;
    } else {
      if (field == 'email') {
        if (!this.isValidEmail(value))
          return <div className="alert alert-danger">Invalid Email.</div>;
      } else if (field == 'mobile_number') {
        if (!this.isValidMobile(value))
          return <div className="alert alert-danger">Invalid Mobile Number.</div>;
      } else {
        return '';
      }
    }
  }

  handleBlur=(event)=> {
    this.setState({ error: this.validateField(event.target.name, event.target.value) });
  }

  handleChange=(event)=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit=(event) =>{
    event.preventDefault();

    const Booking_Detail = {
      name:this.state.name,
      mobile_number:this.state.mobile_number,
      email:this.state.email,
      enterDate:this.state.enterDate,
      exitDate:this.state.exitDate
    }
    console.log(Booking_Detail, "booking detail")
    Axios.post('http://localhost:8000/post', Booking_Detail)
    .then(res=>{
      console.log(res, "data")
    }).catch(err=>{
      console.log(err)
    })
    this.props.history.push('/booklist')

  }

  render() {

    return (

      <div className="card box_shw2 border-0 px-3 rounded-2 mb-3 w_500 py-4 mx-auto mt-5">
        <div className="card-header bg-white f_20_22 border-0 text-center">Hotel Booking</div>
        <div className="card-body">
          {this.state.error}

          <form onSubmit={this.handleSubmit} encType="multipart/form-data" autoComplete="off">
            <div className="position-relative form-group">
              <input name="name" type="text" className="text-field form-control mb-3 bg_grey border-0 py-3" placeholder="Name" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
            </div>
            <div className="position-relative form-group">
              <input name="mobile_number" type="text" className="text-field form-control mb-3 bg_grey border-0 py-1" placeholder="Mobile Number" onBlur={this.handleBlur} value={this.state.mobile} onChange={this.handleChange} />
            </div>
            <div className="position-relative form-group">
              <input name="enterDate" type="date" className="text-field form-control mb-3 bg_grey border-0 py-1" placeholder="enter date" value={this.state.company} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
            </div>
            <div className="position-relative form-group">
              <input name="email" type="email" className="text-field form-control mb-3 bg_grey border-0 py-1" placeholder="Email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
            </div>
            <div className="position-relative form-group">
              <input name="exitDate" type="date" className="text-field form-control mb-3 bg_grey border-0 py-1" placeholder="exit date" value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
            </div>
            <p className="text-center mb-0"><input type="submit" className="btn btn-primary px-5 text-uppercase py-3 f_12_14 border-0 d-inline-block" value="Submit Now" /></p>
          </form>

        </div>
      </div>

    );



  }
}


export default withRouter(ContactForm);






// if (this.state.thankyou) {
//   return (
//     <div className="thankyou_details">
//       <p>Thank for your message. We will contact you soon.</p>
//       <ul className="list-group">
//         <li className="list-group-item">Name: {this.state.name}</li>
//         <li className="list-group-item">Mobile: {this.state.mobile}</li>
//         <li className="list-group-item">Company: {this.state.company}</li>
//         <li className="list-group-item">Email: {this.state.email}</li>
//         <li className="list-group-item">Message: {this.state.message}</li>
//       </ul>
//     </div>
//   )
// }