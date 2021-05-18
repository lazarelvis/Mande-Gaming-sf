import React, { Component } from 'react';
import './css/style.css';
import './css/styleModal.css';
import { Link } from 'react-router-dom';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import FormField from '../utils/formField';

import { fetchAllUsers } from '../../actions/user';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    username: '',
    formError: false,
    formSuccess: '',
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter your first name',
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
          placeholder: 'Enter your last name',
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
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password',
          label: 'Password',
        },
        validation: {
          required: true,
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
    },
  };

  componentDidMount() {
    this.props.fetchUsers();
  }
  popUpRegiser = () => (
    <div>
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
              <h1>LOGIN</h1>
              <h6>Enter your details below</h6>
            </div>
            <div className="content">
              <form onSubmit={(event) => this.submitForm(event)}>
                <FormField
                  id={'email'}
                  formdata={this.state.formdata.email}
                  // change={(element) => this.updateForm(element)}
                />
                <FormField
                  id={'password'}
                  formdata={this.state.formdata.password}
                  // change={(element) => this.updateForm(element)}
                />
                {this.state.formError ? (
                  <div className="error_label">Please check your data</div>
                ) : null}
                <div className="container-register-btn register-btn">
                  <button
                    className="register-button"
                    onClick={(event) => this.submitForm(event)}
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
            <span className="bottom-text">Don't have an account yet? </span>

            <Popup
              trigger={
                // <div className="navbar-button">
                //   <a>Join Us</a>
                // </div>
                <span className="bottom-text-sign">Sign Up</span>
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
                        id={'password'}
                        formdata={this.state.formdata.password}
                        // change={(element) => this.updateForm(element)}
                      />
                      <FormField
                        id={'game'}
                        formdata={this.state.formdata.game}
                        // change={(element) => this.updateForm(element)}
                      />

                      {this.state.formError ? (
                        <div className="error_label">
                          Please check your data
                        </div>
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
                </div>
              )}
            </Popup>
          </div>
        )}
      </Popup>
    </div>
  );

  componentDidMount() {
    if (localStorage.getItem('username-mande-gaming') == undefined) {
      this.setState({
        username: '',
      });
    }
    if (localStorage.getItem('username-mande-gaming') != undefined) {
      this.setState({
        username: localStorage.getItem('username-mande-gaming'),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState login ', prevState.username);
    // console.log('prevState login 1 ', this.state.username);
    // console.log('prevState login 2 ', prevProps.username);

    if (prevState.username != this.state.username) {
      // console.log('prevState login ', prevState.username);
      // console.log('prevState login 1 ', this.state.username);
    }
  }

  render() {
    // console.log('user in head:',this.props.users);
    // console.log('usrn: ', this.state.username);
    // console.log(
    //   "localStorage.getItem('username-mande-gaming') : ",
    //   localStorage.getItem('username-mande-gaming')
    // );
    // console.log('username ', this.state.username);

    return (
      <>
        {this.popUpRegiser()}
        <div className="navbar">
          <ul>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/game-list">Gaming</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <h1 style={{ color: '#fff', paddingRight: '200px' }}>
                {this.state.username}
              </h1>
            </li>
          </ul>
        </div>
        <div>
          <div className="logo">
            <h1>
              <Link to="/">
                M<span className="red-simbol">&</span>E
              </Link>
            </h1>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    dispatch(fetchAllUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
