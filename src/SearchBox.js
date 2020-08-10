import React from 'react';


const SearchBox = (props) => {
    
    const test = () => console.log("Please Work");

    const onSearchChange = props.onSearchChange;
    //onSearchChange("test");

    return(
        <div className="pa2">
            <input 
                name="top-search-bar"
                type="search" 
                placeholder="search robots"
                className="pa3 ba b=--green bg-lightest-blue"
                onChange={onSearchChange}
                onClick={test}
            />
        </div>
        
    );
}
export default SearchBox;