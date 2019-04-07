import React, { Fragment, Component } from 'react';

class Children extends Component {
    render() {
        return (
            <Fragment>
               props.children >>> <h3> {this.props.children}  </h3>
            </Fragment>
        );
    }
}

export default Children;