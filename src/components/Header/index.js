import React, { Component } from 'react';
import './css/style.css';
import './css/styleModal.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import FormField from '../utils/formField';

class Header extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter your name',
          label: 'First Name',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true,
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          name: 'lastname_input',
          type: 'text',
          placeholder: 'Enter your lastname',
          label: 'Last Name',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true,
      },
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true,
      },
      game: {
        element: 'input',
        value: '',
        config: {
          name: 'game',
          type: 'text',
          placeholder: 'Enter your favorite game',
          label: 'Favorite Game',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true,
      },
      phone: {
        element: 'input',
        value: '',
        config: {
          name: 'lastname_input',
          type: 'text',
          placeholder: 'Enter your number',
          label: 'no. Phone',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true,
      },
    },
  };

  popUpRegiser = () => (
    <Popup
      trigger={
        <div className="navbar-button">
          <a>Join Us</a>
        </div>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <div className="square">
            <div className="logo-register">
              <h1>
                M<span className="red-simbol">&</span>E
              </h1>
            </div>
          </div>
          <button className="close" onClick={close}>
            &times;
          </button>

          <div className="header">
            <h1>GREAT TO HAVE YOU BACK!</h1>
            <h6>Enter your details below</h6>
          </div>
          <div className="content">
            <form onSubmit={(event) => this.submitForm(event)}>
              <FormField
                id={'name'}
                formdata={this.state.formdata.name}
                // change={(element) => this.updateForm(element)}
              />
              <FormField
                id={'lastname'}
                formdata={this.state.formdata.lastname}
                // change={(element) => this.updateForm(element)}
              />
              <FormField
                id={'email'}
                formdata={this.state.formdata.email}
                // change={(element) => this.updateForm(element)}
              />
              <FormField
                id={'game'}
                formdata={this.state.formdata.game}
                // change={(element) => this.updateForm(element)}
              />
              <FormField
                id={'phone'}
                formdata={this.state.formdata.phone}
                // change={(element) => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">Please check your data</div>
              ) : null}
              <div className="container-register-btn">
                <button
                  className="register-button"
                  onClick={(event) => this.submitForm(event)}
                >
                  GET STARTED
                </button>
              </div>
            </form>
          </div>
          {/* <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              nested
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
              </span>
            </Popup>
          </div> */}
        </div>
      )}
    </Popup>
  );

  render() {
    return (
      <>
        {this.popUpRegiser()}
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Leaderboard</a>
            </li>
            <li>
              <a href="/game-list">Gaming</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="logo">
            <h1>
              M<span className="red-simbol">&</span>E
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
