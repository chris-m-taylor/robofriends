import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

//PROPS are things that come out of state STATE >> props
//STATE (an object that describes our application) can change


class App extends React.Component {
    
    constructor(){
        super();
        this.state = { // these are the things that can change and 
                       //usually live in the parent component that passes state to different components
            robots: robots,
            searchfield: '',
        }
    }
    // in search box we need onSearchChange

    onSearchChange(event){
        console.log("event is: ",event);
    }

    render(){
        return(
            <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <CardList robots={this.state.robots} />
        </div>
        );
    };
}

export default App;