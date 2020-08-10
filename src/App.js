import React from 'react';
import CardList from './CardList';

import SearchBox from './SearchBox';
import './App.css';

//PROPS are things that come out of state STATE >> props
//STATE (an object that describes our application) can change
// Components with state are smart components


class App extends React.Component {
    
    constructor(){
        super();
        this.state = { // these are the things that can change and 
                       //usually live in the parent component that passes state to different components
            robots: [],
            searchfield: '',
        }
    }

    //if the component mounted then run this
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users') // fetching the users from API fetch is a tool tool to make requests from servers and is part of the window obj
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    // in search box we need onSearchChange
    onSearchChange = (event) => { // use arrow functions to be able to use this in terms of the object
        
        //setting state for searchfield
        this.setState({searchfield: event.target.value}) //triggers a re render calling the render function
    }

    render(){
        //filter array based on the searchfield
        const filteredRobots = this.state.robots.filter(robot => { // the value of this is the input function that called it!!!
            return(
                robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        })
        if (this.state.robots.length === 0){ // if it is taking a while to load
            return <h1>Loading</h1>
        }
        return(
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots} />
        </div>
        );
    };
}

export default App;