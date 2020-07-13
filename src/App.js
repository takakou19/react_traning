import React from 'react';

function App() {
    const profiles = [
        {name: "Takayuki", age:37},
        {name: "Shibuya", age:32},
        {name: "Chizuru", age:33},
        {name: "kodomo"}
    ]
    return (
      <div>
          {
              profiles.map((profile, index) => {
                  return <User name={profile.name} age={profile.age} key={index}/>
              })
          }

          <User name={"Hanako"} age={32} />
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
User.defaultProps={
    age:1
}

export default App;
