import React, { Component } from 'react';
import './css/style.css';
import './css/styleModal.css';
import { Link } from 'react-router-dom';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import FormField from '../utils/formField';

import { fetchAllUsers } from '../../actions/user';
import { connect } from 'react-redux';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';

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
                  <Formik
                    initialValues={{
                      firstname: '',
                      lastname: '',
                      email: '',
                      password: '',
                      favoritegame: '',
                    }}
                    onSubmit={(values) => {
                      console.log('Logging in', values);
                    }}
                    validationSchema={Yup.object().shape({
                      firstname: Yup.string()
                        .max(255)
                        .required('First name required'),
                      lastname: Yup.string()
                        .max(255)
                        .required('Last name required'),
                      email: Yup.string().email().required('Email required'),
                      password: Yup.string()
                        .required('No password provided.')
                        .min(
                          8,
                          'Password is too short - should be 8 chars minimum.'
                        ),
                      favoritegame: Yup.string().max(255),
                    })}
                  >
                    {(props) => {
                      const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                      } = props;
                      return (
                        <div className="content">
                          <form onSubmit={handleSubmit}>
                            <div className="formBlock">
                              <label
                                className="label_inputs"
                                htmlFor="firstname"
                              >
                                First name
                              </label>
                              <input
                                name="firstname"
                                type="text"
                                placeholder="Enter your first name"
                                value={values.firstname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.firstname &&
                                  touched.firstname &&
                                  'error'
                                }
                              />
                              {errors.firstname && touched.firstname && (
                                <div className="input-feedback">
                                  {errors.firstname}
                                </div>
                              )}
                            </div>

                            <div className="formBlock">
                              <label
                                className="label_inputs"
                                htmlFor="lastname"
                              >
                                Last name
                              </label>
                              <input
                                name="lastname"
                                type="text"
                                placeholder="Enter your last name"
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.lastname && touched.lastname && 'error'
                                }
                              />
                              {errors.lastname && touched.lastname && (
                                <div className="input-feedback">
                                  {errors.lastname}
                                </div>
                              )}
                            </div>

                            <div className="formBlock">
                              <label className="label_inputs" htmlFor="email">
                                Email
                              </label>
                              <input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.email && touched.email && 'error'
                                }
                              />
                              {errors.email && touched.email && (
                                <div className="input-feedback">
                                  {errors.email}
                                </div>
                              )}
                            </div>
                            <div className="formBlock">
                              <label className="label_inputs" htmlFor="email">
                                Password
                              </label>
                              <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.password && touched.password && 'error'
                                }
                              />
                              {errors.password && touched.password && (
                                <div className="input-feedback">
                                  {errors.password}
                                </div>
                              )}
                            </div>

                            <div className="formBlock">
                              <label
                                className="label_inputs"
                                htmlFor="favoritegame"
                              >
                                Favorite Game
                              </label>
                              <input
                                name="favoritegame"
                                type="text"
                                placeholder="Enter your favorite game"
                                value={values.favoritegame}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.favoritegame &&
                                  touched.favoritegame &&
                                  'error'
                                }
                              />
                              {errors.favoritegame && touched.favoritegame && (
                                <div className="input-feedback">
                                  {errors.favoritegame}
                                </div>
                              )}
                            </div>
                            <div className="container-register-btn register-btn">
                              <button
                                className="register-button"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                Register
                              </button>
                            </div>
                          </form>
                        </div>
                      );
                    }}
                  </Formik>
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
