import React, {Component,useState} from 'react';
import Person from './Person.js';
function App()
{
  const [my_name,my_name_function]= useState("Python");
  const ChangeName = () =>
  {
    my_name_function("Java");
  }

  return(
    <div>
      <Person name={"Python"}></Person>
      <button onClick={ChangeName}>Change Name</button>
    </div>
  );
}
export default App;































// {
//   const[my_name,changeMyName] = useState("React Js");
//   const[my_age,changeMyAge] = useState(24);

//   const buttonClicked = () =>
//   {
//     changeMyName("Wisdom");
//   }

//   return(
//     <div>
//       <h1>Welcome{my_name}</h1>
//       <h1>Welcome{my_age}</h1>
//       <button onClick={buttonClicked}>Change Name</button>
//     </div>

//   );
// }

// export default App;






































// import React, {Component} from 'react';
 
// class App extends Component
// {

//   state = {
//     my_name: "Prtiksha"
//   }

//   changeMyName = () =>{
//     this.setState(
//       {
//         my_name:"Wisom"
//       }
//     )
//   }
//   render()
// {
//   return(
//     <div>
//       <h1>Hello {this.state.my_name}</h1>
//       <button onClick={this.changeMyName}>Click Here</button>
//     </div>
//   );
// };


// }

// export default App;
