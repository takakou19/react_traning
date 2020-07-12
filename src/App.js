import React from 'react';

const foo = "fooのコメント";

function App() {
  return (
      <React.Fragment>
          <h1>テストの一部</h1>
          <Cat />

          <input type="text" onClick={()=>{console.log("clicked!")}} />
          <input type="button" onMouseLeave={()=>{console.log("aaaa")}}></input>

          <Cat />
          <Cat />
      </React.Fragment>
  );
}

const Cat = () => {
  return (
      <div>
          <div>ねこねこナース{foo}</div>
          <a>aaaa</a>
      </div>
  );
}
export default App;
