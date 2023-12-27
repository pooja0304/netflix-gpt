export const checkValidData = (email,password) =>{
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)
    if(!isEmailValid)  return"Email is invalid"
    if(!isPasswordValid) return "Password is invalid"
    return null;
}