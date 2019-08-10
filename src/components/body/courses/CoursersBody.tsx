import React from 'react';

export default class CoursesBody extends React.Component {
    constructor(props) {
        super(props);
        this.onToggleSortClick = this.onToggleSortClick.bind(this);
        this.onSetCourseAsDefaultClick = this.onSetCourseAsDefaultClick.bind(this);
    }

    onToggleSortClick() {
        //Todo: implement
    }

    onSetCourseAsDefaultClick() {
        //Todo: implement
    }

    render () {
        return (
            <div className="vf-courses-body">
                <table>
                    //Todo: implement
                </table>
            </div>
        )
    }
}