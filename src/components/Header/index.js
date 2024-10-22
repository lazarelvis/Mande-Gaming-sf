import React, { Component } from 'react';
import './css/style.css';
import './css/styleModal.css';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../utils/css/style.css';
import { fetchAllUsers, createUser } from '../../actions/user';
import {
  fetchAuthenticationUser,
  fetchAuthUser,
  logOutUser,
  fetchLogOut,
} from '../../actions/authentication';
import { connect } from 'react-redux';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer, toast } from 'react-toastify';
import isEmpty from 'lodash/isEmpty';
import { NavLink } from 'react-router-dom';

if (typeof window !== 'undefined') {
  injectStyle();
}

class Header extends Component {
  state = {
    username: '',
    logout: true,
    authdata: '',
  };
  //|| this.props.getUsersSuccess

  notify(text) {
    toast(`${text}`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  logOut = () => {
    // logOutUser();
    this.props.fetchLogOut();
    this.setState({
      logout: false,
    });
  };

  popUpRegiser = () => (
    <div>
      {this.props.getAuthSuccess && this.state.logout ? (
        <div className="navbar-button-logout">
          <button className="logout-button" onClick={this.logOut}>
            Log out
          </button>
        </div>
      ) : (
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
              <Formik
                initialValues={{
                  strategy: 'local',
                  email: '',
                  password: '',
                }}
                onSubmit={(values) => {
                  // console.log('Logging data:', values);
                  this.props.fetchAuthenticationUser(values);
                  this.setState({
                    logout: true,
                  });
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email().required('Email required'),
                  password: Yup.string().required('No password provided.'),
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
                            className={errors.email && touched.email && 'error'}
                          />
                          {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
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

                        <div className="container-register-btn register-btn">
                          <button className="register-button" type="submit">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  );
                }}
              </Formik>
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
                        onlineGames: [],
                        puncte: 0,
                      }}
                      onSubmit={(values) => {
                        // console.log('Register in', values);
                        this.props.createUser(values);
                        this.notify('Successfully registered');
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
                                    errors.lastname &&
                                    touched.lastname &&
                                    'error'
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
                                    errors.password &&
                                    touched.password &&
                                    'error'
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
                                {errors.favoritegame &&
                                  touched.favoritegame && (
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
                                  {close}
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
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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

    this.props.fetchAuthUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.setAuthenticationSuccess !== this.props.setAuthenticationSuccess
    ) {
      this.notify('Successfully logged in');
      localStorage.removeItem('username-mande-gaming');
    }
    if (prevProps.authentication !== this.props.authentication) {
      this.props.fetchAuthUser();
    }
    // if (prevProps.auth !== this.props.auth) {
    //   this.setState({
    //     authdata: this.props.auth,
    //   });
    // }
    // if (prevState.token !== this.state.token) {
    //   alert('no token');
    // }
  }
  ShowUsername() {
    if (localStorage.getItem('username-mande-gaming') != undefined) {
      return (
        <div className="unservane_header">
          <p>{this.state.username}</p>
        </div>
      );
    } else if (localStorage.getItem('username-mande-gaming') == undefined) {
      let auth = this.props.auth;
      if (isEmpty(auth)) {
        return console.log('loading...');
      }
      return (
        <div className="unservane_header">
          <p>{auth.user.firstname + ' ' + auth.user.lastname}</p>
        </div>
      );
    }
  }
  render() {
    // console.log('users: ', this.props.users);
    // console.log('auth data: ', this.props.authentication);
    // console.log('auth data: ', this.props.auth);
    return (
      <>
        {this.popUpRegiser()}

        <div className="navbar">
          <ul>
            <li>
              <NavLink exact to="/leaderboard" className="nav-link">
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/game-list" className="nav-link">
                Gaming
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
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

        {this.ShowUsername()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    authentication: state.authentication,
    auth: state.auth,
    getAuthSuccess: state.getAuthSuccess,
    setAuthenticationSuccess: state.setAuthenticationSuccess,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    dispatch(fetchAllUsers());
  },
  createUser: (data) => {
    dispatch(createUser(data));
  },
  fetchAuthenticationUser: (data) => {
    dispatch(fetchAuthenticationUser(data));
  },
  fetchAuthUser: () => {
    dispatch(fetchAuthUser());
  },
  fetchLogOut: () => {
    dispatch(fetchLogOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
