const validation =(values) => {

    let errors = {}

    if(!values.firstname){
        errors.firstname="Name requried"
    }
    else if(values.firstname.length < 5){
        errors.firstname ="Name is not valied"
    }
    if(!values.email){
        errors.email="Email is requried"
    }
    else if(values.email.length < 5){
        errors.email ="Enter the valid email"
    }
    if(!values.password){
        errors.password="Password requried"
    }
    else if(values.password.length < 8){
        errors.password ="Password must Have Eight Letters"
    }
    return errors
}

export default validation;