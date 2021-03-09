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
        <Button onClick={signIn} variant="contained" size="large" style={{ width: "100%", backgroundColor: "#FFFFFF", fontWeight: "bold" }}>
            {/* <img src="icons/google.svg" alt="google login" style={{ display: "flex" }}></img> */}
                Sign in with Google
        </Button>
    );
}

export default LoginHooks;