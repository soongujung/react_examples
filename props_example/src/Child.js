import React, { Fragment, Component } from 'react';

class Child extends Component {
    static defaultProps = {
        name : '이름없음'
    }

    render() {
        return (
            <Fragment>
                <ul>
                    <li> {this.props.name} : {this.props.description} </li>
                </ul>
            </Fragment>
        );
    }
}

export default Child;