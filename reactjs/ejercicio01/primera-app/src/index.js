import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const usuario = {
    nombre: 'Marcos',
    apellido: 'Rivas'
};

class Welcome extends React.Component{

    render(){
        return <h1>Hola mundo, {this.props.name}</h1>;
    }
}
// o
// function Welcome(props){
//     return <h1>Hola mundo, {this.props.name}</h1>;
// }
//const element = (<h1>Hola mundo, {formatUser(usuario)}</h1>);
const element = <Welcome name = "Marcos" />

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    element,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
