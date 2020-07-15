import React from 'react';
import PropTypes from 'prop-types';

function App() {
    const profiles = [
        {name: "Takayuki", age:37},
        {name: "Shibuya", age:32},
        {name: "kodomo", age:10},
        {name: "nakao"}
    ]
    return (
      <div>
          {
              profiles.map((profile, index) => {
                  return <User name={profile.name} age={profile.age} key={index}/>
              })
          }

          {/*<User name={"Hanako"} age={32} />*/}
      </div>
  );
}

const User = (props) => {
  return (
      <div>
          <div>I am {props.name}, and {props.age}years old!</div>
      </div>
  );
}

User.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number.isRequired
}


export default App;
