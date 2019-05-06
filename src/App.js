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
    const subjects = ["water","trees","earth", "car", "cute developer"]

    return(
      <div className="App">
        { subjects.map(subject => <RandomImage subject={subject} />)} 
        {/* why map instead for each. map creats component and can use it as array extension, below is example of extension */}
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

export default App;
