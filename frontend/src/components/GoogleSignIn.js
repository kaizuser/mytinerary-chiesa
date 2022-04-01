import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import usersActions from '../redux/actions/usersActions';

function GoogleSignIn(props) {

  const responseGoogle = async (res) => {
     const logedUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      from: "google"
    }
    await props.signInUser(logedUser)
  }

  return (
    <GoogleLogin
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black"
      clientId="710252764146-n3hvn9i3t5fk752tdoakjufutg1aegqp.apps.googleusercontent.com"
      buttonText=" with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}

const mapDispatchToProps = {
    signInUser: usersActions.signInUser,

}

export default connect(null, mapDispatchToProps)(GoogleSignIn);
