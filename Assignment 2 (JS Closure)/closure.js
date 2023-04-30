//This js proram is an example of using closure concept in real world

function deptLogin(deptName){
    logins = {"cse":"cse1234","is":"ise1234","ece":"ece1234","me":"me1234"}
    x=10
    //closure
    debugger;
    function login(password){
        if(logins[deptName]===password){
            console.log("Login successful!!"+x)
        }else{
            console.log("Wrong password")
        }
    }

    return login;
}

cseLogin = deptLogin("cse")
debugger
cseLogin("cse1234")