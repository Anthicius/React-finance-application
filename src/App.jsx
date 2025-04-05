import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import { UserInput } from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState(null);


  
  const handleUserInputChange = (inputData) => {
    const results = calculateInvestmentResults(inputData);
    setUserInput(results);
    console.log(inputData)
  };
  



  return (
    <>
      <Header />
      <UserInput onInputChange={handleUserInputChange}  />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
