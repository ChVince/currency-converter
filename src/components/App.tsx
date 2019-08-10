import React from 'react';
import Header from './Header';
import Body from './body/Body';
import Footer from './Footer';

interface AppProps {
}

export default class App extends React.Component<AppProps> {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Body/>
                <Footer/>
            </React.Fragment>
        )
    }
}
