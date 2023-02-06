import {Button} from '@mui/material';


const Form = ()=>{

    const aaa=()=>{
        alert("aaa")
    }

    return <>
        <Button onClick={()=> aaa() } variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        
    </>
};

export default Form;