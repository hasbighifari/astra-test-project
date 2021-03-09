import React, { Component } from "react";
import * as Sentry from "@sentry/browser";
import { render } from "@testing-library/react";


class ErrorSentryMonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    componentDidCatch(error, errorInfo) {
        Sentry.withScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key]);
            });
            Sentry.captureException(error);
        });
    }
    render() {
        return (
            <>
                {this.props.children}
            </>)
    }
}

export default ErrorSentryMonitoring