import { useState, useEffect, useRef } from "react";
import "./Enterotp.css";
const Enterotp = ({otpSize, otpAuth}) => {
    const optSize = 4;
    const [otpData, setOtpData] = useState(new Array(optSize).fill(""));
    const otpRef = useRef([]);
    const updateOtpDataOnChange = (index, e) => {
        let tempOtpValues = [...otpData];
        tempOtpValues[index] = e.target.value.slice(-1);
        setOtpData(tempOtpValues);

        const otpValue = tempOtpValues.join("");
        if(otpValue.length === otpSize)
            otpAuth(otpValue);
        if(index < otpSize-1 && tempOtpValues[index])
        otpRef.current[index+1].focus();
    }

    const updateOtpDataOnKeyDown = (index, e)=>{
        if(e.key === "Backspace" && !otpData[index] && index>0)
        otpRef.current[index-1].focus();
    }

    const updateOtpDataOnClick = (index, e) => {
        if(index > 0 && !otpData[index-1])
        otpRef.current[otpData.findIndex((inpNum)=> {return inpNum=="";})].focus();
    }

    useEffect(() => {
        if(otpRef.current[0])
        otpRef.current[0].focus();
    },[])

    return (

        <div>
        {otpData.map((digit, index)=>{
            return <input key= {index} type="text" className="otp"
            value={digit} 
            ref = {(input)=>{ otpRef.current[index] = input }}
            onChange = {(e)=> {updateOtpDataOnChange(index, e)}}
            onKeyDown = {(e)=> {updateOtpDataOnKeyDown(index,e)}}
            onClick={(e)=>{updateOtpDataOnClick(index,e)}}  
            >     
            </input>
        })}
    </div>)
}

export default Enterotp;