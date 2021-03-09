import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import Button from '@material-ui/core/Button'

// refresh token
import { refreshTokenSetup } from './utils';

const clientId =
    '345343437350-1675ma4g2et1dtrh282qtcpomqrblers.apps.googleusercontent.com';

function LoginHooks() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });

    return (
        <Button onClick={signIn} variant="contained" size="large" style={{ width: "100%", backgroundColor: "#FFFFFF", fontWeight: "bold", marginBottom: 10 }}>
            <img src="google.svg" alt="google login" style={{ width: 30, height: 30 }}></img>
            <span style={{ paddingLeft: 20 }} > Sign in with Google</span>
        </Button >
    );
}

export default LoginHooks;