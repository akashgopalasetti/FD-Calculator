function cleardetails() {
    document.querySelector("#details").innerHTML ="Hey User, total maturity value is:0000";
}
function checkMaturity(){
    event.preventDefault(); 
    var rate;
    var maturity;
    var username=document.querySelector("#username").value
    var age=document.querySelector("#age").value
    var amount=document.querySelector("#amount").value
    var tenure=document.querySelector("#tenure").value
    var details=document.querySelector("#details")
    if(amount<500 || amount>5000001){
        alert("amount should be in range 500 to 50,00,000")
        console.log("amount err")
        
    }
    if(tenure<1 || tenure>30){
        alert("Duration should be in range 1 to 30")
        console.log("Tenure err")
        
    }
    if(age>60 ){
        rate=8;
        
    }
    else if(age>=40 && age<60){
        rate=7;
    }
    else if(age>=18 && age<40){
        rate=6
    }
    else{
        alert("age is invalid, it should be >18 ")
    }
    console.log(rate)
    var si =intrest(rate,amount,tenure,username)
    if(si=>10000){
        maturity=si-(si*(2/100))
    }
    details.innerHTML=`Hey ${username}, total maturity value is: ${maturity.toFixed(3)}`
    
    
}

function intrest(rate,amount,tenure,username){
   return (rate*amount*tenure)/100

}

