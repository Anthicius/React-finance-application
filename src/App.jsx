import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import { UserInput } from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState(null);


  const handleUserInputChange = (results) => {
    setUserInput(results); 
  };

  return (
    <div>
      <Header />
      <UserInput onInputChange={handleUserInputChange} /> 
      {console.log(userInput)}
      <Results userInput = {userInput} />
    </div>
  );
}

export default App;