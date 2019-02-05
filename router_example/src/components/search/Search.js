import React, { Component } from 'react';
import qs from 'qs';

class Search extends Component {
    render() {
        const query = qs.parse(this.props.location.search.substr(1));
        const keyword = query.keyword;

        if(!keyword){
            return(
                <div>
                    Welcome, SEARCH Anything You want
                </div>
            );
        }
        
        return (
            <div>
                <h2> Your keyword </h2>
                <p> {keyword} </p>
            </div>
        );
    }
}

export default Search;