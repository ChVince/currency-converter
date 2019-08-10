import React from 'react';

export default class ConverterBody extends React.Component {
    constructor(props) {
        super(props);
        this.onCurrencySet = this.onCurrencySet.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onCurrencyReverse = this.onCurrencyReverse.bind(this);
    }

    onCurrencySet() {
        //Todo: implement
    }

    onInputChange() {
        //Todo: implement
    }

    onCurrencyReverse() {
        //Todo: implement
    }

    render () {
        return (
            <div className="vf-converter-body">

            </div>
        )
    }
}