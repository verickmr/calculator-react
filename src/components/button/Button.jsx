import { Btn } from "./styles";

const Button = ({label, onClick}) => {
    return ( <Btn onClick={onClick}>{label}</Btn> );
}
 
export default Button;