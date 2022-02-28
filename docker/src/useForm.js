import {useState, useEffect} from 'react';

const useForm=() => {
    const [values,setValues] = useState({
        vendor:'',
        total:'',
        type:''


    })
    const handleChange = e =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
    
        })
    }
    return {handleChange, values}
}



export default useForm