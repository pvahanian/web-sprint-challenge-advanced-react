import { useState } from 'react';
// NOt sure if I'm supposed to use local storage here but I think it would 
// make the page more convient if it remembers the user info for check out.
const useForm = (initalValue) => { 
    const key="oldCustomer" //This is the placeholder key in local storage
    const [userInfo, setUserInfo] = useState(() =>{ //using state here to set the userInfo value with the code below
    
    // Has two possible outcomes, if the customer exisited then return userinfo with the local data
    if(window.localStorage.getItem(key)){
        // This is the outcome that will execute if the placeholder already exists and returns the users old data
        return JSON.parse(window.localStorage.getItem(key))
    }

    // else this will create the placeholder for the user incase they come back
    window.localStorage.setItem(key, JSON.stringify(initalValue));
    //and return intial value of nothing on the page until its updated
    return(initalValue)
    })
    // Ziggs trial easterEgg alert! I bet you hear this quote alot ""No no no no, I got my fuses crossed."


    //We set up a function here to help update the values to localStorage should the user
    //update the form
    const setUserProps = updatedValue =>{
        //this 1st line just states the data for our form to show when submit is clicked
        setUserInfo(updatedValue)

        //this 2nd line storages that data for future use should the user come back
        window.localStorage.setItem(key,JSON.stringify(updatedValue))
    }
    // Return whatever data we found from local storage as userInfo and 
    // return setUserProps to be able to update values in 2 place
    return [userInfo,setUserProps]
};



export default useForm;