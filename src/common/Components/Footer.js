import React from 'react';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="footer__prev">01.</div>
                <div className="footer__active">02. Featured</div>
                <div className="footer__next">03.</div>
            </div>
        );
    }
}
