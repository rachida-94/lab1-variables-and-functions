

function formatFullName(firstName,lastName){




    return `${lastName}, ${firstName}`;
    
}





function capitalize(firstName,lastName){

    let fullName=[firstName,lastName];
    let result="";
    for(let i=0 ; i<fullName.length;i++){

       let word=fullName[i];
       let capitalizeWord =word[0].toUpperCase( )+ word.slice(1);

       result+=capitalizeWord +" ";
    }
    return result;
    
}


function formatFullName(firstName,lastName){
    

    if (firstName ==="" || lastName === ""){

        return "invalid name input";
        
    }
    
}

//task2

function calculateTotalCost(price,quantity,taxRate){

   let totalCost = (price * quantity) * (1 + taxRate);
   let inputs=[price,quantity,taxRate];

   for (let i = 0; i < inputs.length; i++) {
        inputs[i] = Number(inputs[i]);
        if ( typeof inputs[i] !== 'number' || isNaN(inputs[i])) {
            return "Invalid input.";
        }
    }

    return totalCost;
}


///task3


function checkEligibility(age,isEmployed){

    age=Number(age);
if (age>18 && isEmployed === true){
    return "you are elegible";
}

else if(age>18 && isEmployed===false){
return "you are conditionaly elegible";
}

else {return "you are not elegible";}
}

//console.log (checkEligibility(21,true));



///task 4


function calculateTotalCost(price,quantity,taxRate,discount){

   
   let inputs=[price,quantity,taxRate,discount];

   for (let i = 0; i < inputs.length; i++) {
        inputs[i] = Number(inputs[i]);
        if ( typeof inputs[i] !== 'number' || isNaN(inputs[i])) {
            return "Invalid input.";
        }
    }

 let subtotal = (price * quantity) - discount;
    if (subtotal < 0){subtotal = 0} ;

    
    let totalCost = subtotal * (1 + taxRate);
    return totalCost;

}


//console.log(calculateTotalCost(54,2,0.15,0.2));