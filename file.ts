import inquirer from "inquirer";

let myBalance = 10000; // dollar

console.log(myBalance)
let mypin = 54321;

let pinAnwser =  await inquirer.prompt(
    [
        {
           name:"q1",
           message:"enter your pin",
           type:"number",
        }
    ]

)
if(pinAnwser = mypin){
    console.log("correct pin code!!!");

let operationAns =  await inquirer.prompt(
    [
        {
            name:"operation",
            message:"please select option",
            type:"list",
            choices:["withdraw","check balance"]
                
        }
    ]
);
console.log(operationAns)

if (operationAns.operation ==="withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message:"enter your amount",
                type:"number"

            }
        ]
    )
    myBalance  -= amountAns.amount
    console.log("your remaining balance is :" +myBalance)
} else if (operationAns.operation === " check Balance"){
    console.log("yourbalance is :" +myBalance)

}


else{
    console.log("incorrect pin number");
    
}

}
    















