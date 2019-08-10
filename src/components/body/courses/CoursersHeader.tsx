import React from 'react';

export default class CoursesHeader extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onStopSearchClick = this.onStopSearchClick.bind(this);
    }

    onSearchClick() {
        //Todo: implement
    }

    onStopSearchClick() {
        //Todo: implement
    }

    render () {
        return (
           <div className="vf-courses-header">
               <div className="vf-courses-search"></div>
           </div>
        )
    }
}