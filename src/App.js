import React, {Component} from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}

//         <h1> Hello to React World</h1>

//       </header>
//     </div>
//   );
// }


// Makeing new component
class RandomImage extends Component{
  render(){
    return(
    <div>
      <h1> Some {this.props.subject} Image </h1>
      <img src={'http://source.unsplash.com/weekly?' + this.props.subject} alt={this.props.subject} />
      <p> Cool, isn't it? </p>
    </div>
    );
  }
}


//passing props

class App extends Component {


  render(){

    const subjects = ["water","trees","earth", "car", "cute developer"] {/* static components so can use props, 
    to have dynamic components we use "State" */}
    
    return(
      <div className="App">

       
       {/* rendering an array of randomimage components */}
        { subjects.map(subject => <RandomImage subject={subject} />)} 
        {/* why map instead for each. map creats component and can use it as array, below is example of extension
         prop example subject="mountain" */}
        {
          [
            <RandomImage subject="mountain" />,
            <RandomImage subject="sea" />
          ]
        }
      </div>
    );
  }
}

{/* 2 passing State */}
{/*
class App extends Component {


  render(){

    const subjects = ["water","trees","earth", "car", "cute developer"] 
    // static components so can use props, to have dynamic components we use "State" 
    
    return(
      <div className="App">

       <label>subject</label><input />

       // rendering an array of randomimage components 
        { subjects.map(subject => <RandomImage subject={subject} />)} 
      // why map instead for each. map creats component and can use it as array, below is example of extension
         prop example subject="mountain" 
        {
          [
            <RandomImage subject="mountain" />,
            <RandomImage subject="sea" />
          ]
        }
      </div>
    );
  }
}
*/}

export default App;
