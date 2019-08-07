import React, { Component } from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import "./../contact.css";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
      try{
          const res = axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

          dispatch({ type: "DELETE_CONTACT", payload: id })

      }catch(e){
          dispatch({ type: "DELETE_CONTACT", payload: id })

      }
   
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="my-3 p-3 bg-white rounded box-shadow">
                <h6 className=" pb-2 mb-0">
                  {name}
                  <i
                    onClick={() =>
                      this.setState({
                        showContactInfo: !this.state.showContactInfo
                      })
                    }
                    className="fa fa-caret-down"
                    style={{ cursor: "pointer" }}
                  />
                  <i
                    className="fa fa-times"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  />

                        <Link to={`/edit/${id}`}>
                        <i className="fa fa-pencil"
                            style={{ cursor: "pointer", float: "right", color: "blue" }}
                        />
                    </Link>
                
                </h6>

                {showContactInfo ? (
                  <div className="media text-muted pt-3 border-gray">
                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom ">
                      <span className="d-block ">{email}</span>
                      <span className="d-block">{phone}</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
