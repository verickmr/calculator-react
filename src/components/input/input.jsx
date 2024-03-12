import Button from "../button/Button";
import { InputContainer } from "./styles";

const Input = ({value, label, onClick}) => {
    return ( <InputContainer><input value={value}/>            <Button label={label} onClick={onClick} />
    </InputContainer> );
}
 
export default Input;