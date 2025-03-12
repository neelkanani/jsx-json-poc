
import jsonData from './content.json';
import './App.css'
import renderJSXFromJSON from './renderJSXFromJSON';
import SampleComponent from './SampleComponent';
import jsxToJson from './jsxToJson';


function App() {
 // Example click handler for dynamic actions
//  window.handleClick = () => alert('Button Clicked!');
const jsxElement = (
  <div className="container">
    <h1 className="title">Welcome to My App</h1>
    <p className="description">This content is dynamic.</p>
    <button onClick={() => alert('Clicked!')}>Click Me</button>
  </div>)
const jsonOutput = jsxToJson(jsxElement);

console.log('Converted JSON:', JSON.stringify(jsonOutput, null, 2));
  return (
    <div>
        {renderJSXFromJSON(jsonData)}
        <>
        
        </>
    </div>
  );
}

export default App
