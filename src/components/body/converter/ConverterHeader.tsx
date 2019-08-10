import React from 'react';

export default class ConverterHeader extends React.Component {
    constructor(props) {
        super(props);
        this.onAddCurrency = this.onAddCurrency.bind(this);
        this.onRemoveCurrency = this.onRemoveCurrency.bind(this);
    }

    onAddCurrency() {
        //Todo: implement
    }

    onRemoveCurrency() {
        //Todo: implement
    }

    render () {
        return (
            <div className="vf-converter-header">
                <div className="vf-converter-currencies"></div>
            </div>
        )
    }
}