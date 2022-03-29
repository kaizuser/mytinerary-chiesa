import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import usersActions from '../redux/actions/usersActions.js';

function GoogleLogUp(props) {

  const responseGoogle = async (res) => {
    const userData = {
      fullName: res.profileObj.givenName + " " + res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      from: "google",
      pais:props.pais
    }
    await props.signUpUser(userData)
  }

  return (
    <GoogleLogin
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black"
      clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com"
      buttonText="SignUp with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}

const mapDispatchToProps = {
  signUpUser: usersActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(GoogleLogUp);
