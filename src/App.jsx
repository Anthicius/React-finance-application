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
    <>
      <Header />
      <UserInput onInputChange={handleUserInputChange} /> 
      <Results userInput = {userInput} />
    </>
  );
}

export default App;