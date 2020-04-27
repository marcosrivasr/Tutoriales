import React from 'react';
import ReactDOM from 'react-dom';

const data = [
    {text: "Ir por la despensad"},
    {text: "Darle de comer al perro"},
    {text: "Terminar videos"}
];

class Editor extends React.Component{

    add(){
        console.log('Nuevo elemento');
    }

    render(){
        return(
            <div>
                <label>Pendiente:</label> 
                <input type="text" />
                <input type="button" value="Añadir" onClick={this.add()} />
            </div>
        );
    }   
}

class Todos extends React.Component{
    render(){
        return(
            <div>
                {this.props.todos.map( 
                    (todo, i) =>
                        <Todo key={i} text={todo.text} />
                    
                )};
            </div>
        );
    }
}

class Todo extends React.Component{

    render(){
        return (
            <li>
                <input type="checkbox" />
                {this.props.text}
            </li>
        );
    }

}

ReactDOM.render(
    <div>
        <Editor />
        <Todos todos={data} />
    </div>,
    document.getElementById('root')
);

