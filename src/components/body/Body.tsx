import React from 'react'
import Converter from './converter/ConverterPanel'
import Courses from './courses/CoursesPanel'

export default class Body extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="vf-body">
                <Converter />
                <Courses />
            </div>
        )
    }
}