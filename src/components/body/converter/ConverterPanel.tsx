import React from 'react';
import ConverterHeader from './ConverterHeader';
import ConverterBody from './ConverterBody';

export default class Converter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ConverterHeader />
                <ConverterBody />
            </React.Fragment>
        )
    }
}