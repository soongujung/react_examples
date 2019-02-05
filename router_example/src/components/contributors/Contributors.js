import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Contributor from './Contributor';

class Contributors extends Component {

    render() {
        return (
            <div>
                <h3>Contributors</h3>
                <ul>
                    <li><Link to="/contributors/cargo"> cargo </Link></li>
                    <li><Link to="/contributors/kingkong"> kingkong </Link></li>
                    <li><Link to="/contributors/aladdin"> aladdin </Link></li>
                </ul>

                <Route  path="/contributors"
                        exact={true}
                        render={()=>(<div> select users ... </div>)}>
                </Route>

                <Route path="/contributors/:name" component={Contributor}></Route>
            </div>
        );
    }
}

export default Contributors;