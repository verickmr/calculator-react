import { useState } from "react";
import Button from "./components/button/Button";
import Input from "./components/input/input";
import { Container, Content, Row } from "./styles";

function App() {
  const [number, setNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setNumber((prev) => `${prev == 0 ? "" : prev}${number}`);
  };
  const handleClear = () => {
    setFirstNumber(0)
    setNumber(0)
    setOperation("")
  }
  const handleSum = () => {
    if (firstNumber == 0 ) {
      setFirstNumber(number);
      setNumber(0);
      setOperation("+")
    }
    else{
      setFirstNumber(number);
      setNumber(0);
      setOperation("+") 
    }
    
  };
  const handleMinus = () => {
    if (firstNumber == 0) {
      setFirstNumber(number);
      setNumber(0);
      setOperation("-")
    } 
    else {
      setFirstNumber(number);
      setNumber(0);
      setOperation("-")
    }
  };
  const handleMultiply = () => {
    if (firstNumber == 0) {
      setFirstNumber(number);
      setNumber(0);
      setOperation("x");
    } else {
      setFirstNumber(number);
      setNumber(0);
      setOperation("x")
    }
  };
  
  const handleDivide = () => {
    if (firstNumber == 0) {
      setFirstNumber(number);
      setNumber(0);
      setOperation("/");
    } else {
      setFirstNumber(number);
      setNumber(0);
      setOperation("/")
    }
  };
  const handleEquals = () => {
    if (firstNumber != 0 && operation != "" && number != 0) {
      let result
      switch(operation){
        case "+":
          result = Number(firstNumber) + Number(number);
          setNumber(result);
          setOperation("")
                    break
        case "-":
             result = Number(firstNumber) - Number(number);
            setNumber(result);
            setOperation("")
                    break
        case "x":
             result = Number(firstNumber) * Number(number);
            setNumber(result);
            setOperation("")
                    break
        case "/":
             result = Number(firstNumber) / Number(number);
            setNumber(result);
            setOperation("")
                    break
      }
    }
  };
  return (
    <>
      <Container>
        <Content>
          <Input value={number} label={"C"} onClick={handleClear} />
          <Row>
            <Button label={7} onClick={() => handleAddNumber(7)} />
            <Button label={8} onClick={() => handleAddNumber(8)} />
            <Button label={9} onClick={() => handleAddNumber(9)} />
            <Button label={"/"} onClick={handleDivide}/>
          
            <Button label={6} onClick={() => handleAddNumber(6)} />
            <Button label={5} onClick={() => handleAddNumber(5)} />
            <Button label={4} onClick={() => handleAddNumber(4)} />
            <Button label={"x"} onClick={handleMultiply}/>
         
            <Button label={3} onClick={() => handleAddNumber(3)} />
            <Button label={2} onClick={() => handleAddNumber(2)} />
            <Button label={1} onClick={() => handleAddNumber(1)} />
            <Button label={"-"} onClick={handleMinus}/>
         
            <Button label={"."} onClick={()=>handleAddNumber(".")} />
            <Button label={"0"} onClick={()=>handleAddNumber(0)}/>
<Button label={"="} onClick={handleEquals}/>
            <Button label={"+"} onClick={handleSum} />
          </Row>
        </Content>
      </Container>
    </>
  );
}

export default App;
