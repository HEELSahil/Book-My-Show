/*const User = (props) => {
    return (
        <div>
        <h1>
        {props.name}
        </h1>
        <p>{props.description}</p>
        </div>
    );
};
export default User;*/

import React, {useState, useEffect} from "react";

const User = (props) => {
    const [planet, setPlanet] = useState("earth");

    useEffect(() => {
        // heavy computation
        console.log("component mounting");

        // componentWillUnMount
        return console.log("bye bye");
    }, []);
    
    // componentDidUpdate
    // shouldComponentUpdate
    useEffect(() => {
      console.log("planet changed");
    }, [planet]);

    return (
     <div>
     <h1>{props.name} </h1>
     <p>{props.description} </p>
     <button onClick={() => setPlanet("pluto")}>{planet}</button>
     </div>
  );
};


export default User;

// props => properties/parameters
//state

// react 16

//Hooks -> power to your functional component holds
// useState()
//useDiviehook

// Life cycle methods

// Hooks 