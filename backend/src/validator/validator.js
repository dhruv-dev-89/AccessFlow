import validator from "validator";
import isEmail from "validator/lib/isEmail";

const emailValidator= (email)=>{
    return validator.isEmail(email)
}

const nameValidator=(name){
    if(!name||name.trim().length<2){
        return false;
    }
    else {
        return true;
    }
}

const passwordValidator=(password)=>{
    if(password.trim().length<6){
        return false;
    }
    else{
        return true;
    }
}