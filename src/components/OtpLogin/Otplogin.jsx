import { useState } from "react";
import Enterotp from "../EnterOtp/Enterotp";

const OtpLogin = () => {
    const [phoneData, setPhoneData] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const updatePhoneData = (e) => {
        setPhoneData(e.target.value);
    }
    const updateOnSubmit = (e) => {
        e.preventDefault();
        //phone number validations
        const regex = /[^0-9]/g;
        if(phoneData.length !== 10 || regex.test(phoneData)){
            alert("Invalid phone number");
        }
        // sent otp
        setOtpSent(true);
    }

    const otpAuth = () => {
        console.log("otp authenticated");
    }
    return (
    <div>
        {!otpSent ? <form onSubmit={updateOnSubmit}>
            <input type='text' value={phoneData} onChange={updatePhoneData}></input>
            <input type="submit"></input>
        </form> : 
        <div> 
            <div>  {phoneData}</div>
            <Enterotp otpSize = {4} otpAuth = {otpAuth} />
        </div> }
    </div>)
}

export default OtpLogin;