import React from 'react';

class Search extends React.Component{

    constructor(props){
        super(props);
    }

    onChangeEvent = e =>{
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(query);
    }

    render(){
        
        return(
            <input type="text" onChange={this.onChangeEvent} />
        );
    }
}

export default Search;