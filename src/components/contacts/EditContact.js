import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;
    this.setState({
        name:contact.name,
        email:contact.email,
        phone:contact.phone
    })
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      name,
      email,
      phone
    };

    //match params
    const updContact = {
      name,
      email,
      phone
    }
    const {id} = this.props.match.params;
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact);

    dispatch({type:'UPDATE_CONTACT',payload:res.data});

    //clear
    this.setState({
      name: "",
      email: "",
      phone: ""
    });

    //back function
    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder=" Enter Name"
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder=" Enter Email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder=" Enter Phone"
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-light  btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
