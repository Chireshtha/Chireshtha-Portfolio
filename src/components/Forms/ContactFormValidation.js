function Validation(values){
    let error = {}
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(values.name === "")
    {
        error.name = "Name is required"
    }
    else{
        error.name = ""
    }

    if(values.email === "")
    {
        error.email = "Email is required"
    }
    else if (!emailPattern.test(values.email)) {
        error.email = "Email is not valid";
    } 
    else{
        error.email = ""
    } 
    if(values.subject === "")
        {
            error.subject = "Subject is required"
        }
    else{
        error.subject = ""
    }
    if(values.message === "")
        {
            error.message = "Message is required"
        }
    else{
        error.message = ""
    }
    return error;

}
export default Validation