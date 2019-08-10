import React from 'react';
import CoursesHeader from './CoursersHeader';
import CoursesBody from './CoursersBody';

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <CoursesHeader />
                <CoursesBody />
            </React.Fragment>
        )
    }
}