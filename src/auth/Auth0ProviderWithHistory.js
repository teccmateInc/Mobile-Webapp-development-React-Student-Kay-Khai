import React from 'react';
import { connect } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENTID } = process.env;

const Auth0ProviderWithHistory = ({ children, loginUpdate, test }) => {

    const onRedirectCallback = (appState) => {
        console.log('onRedirectCallback');
    };

    return (
        <Auth0Provider
            domain={REACT_APP_AUTH0_DOMAIN}
            clientId={REACT_APP_AUTH0_CLIENTID}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

// export default Auth0ProviderWithHistory;

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { })(Auth0ProviderWithHistory);
