import React, { Component } from 'react';

class Contributor extends Component {
    contributors = [
        {
            name: 'cargo',
            desc: '자유로운 영혼의 소유자'
        },
        {
            name: 'kingkong',
            desc: '나는 킹콩'
        },
        {
            name: 'aladdin',
            desc: '램프의 요정 지니를 잃었다.'
        }
    ];

    resultObj = {};

    render() {
        const objMatch = this.props.match;
        this.contributors.map((eachObj)=>{
            this.resultObj[eachObj.name+''] = eachObj;
        });

        const {name} = objMatch.params;
        const obj_contributor = this.resultObj[name];

        if(!obj_contributor){
            return <div>No Result</div>
        }

        return (
            <div>
                <h2>
                    name : {name}
                </h2>
                <p>{obj_contributor.desc}</p>
            </div>
        );
    }
}

export default Contributor;