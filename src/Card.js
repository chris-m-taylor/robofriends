import React from 'react';


const Card = ({name, email, id}) => { //destructuring
    
    return (

        <div className="tc bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    )
}

export default Card;