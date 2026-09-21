const batch =[
    { id: "1", Amount: 10000000, gateway: "eSewa" },
    { id: "2", Amount: 5000, gateway: "eSewa" },
    { id: "3", Amount: 20000, gateway: "Khalti" },
    { id: "4", Amount: 7000, gateway: "eSewa" },
    { id: "5", Amount: 25000, gateway: "Khalti" },
    { id: "6", Amount: 0, gateway: "Fonepay" },
];
function validate(transc) {

    if( transc.Amount <= 0) {
    return "Invalid amount";
  }
  if (transc.Amount > 1000000) {
    return "Amount exceeds transaction limit";
  }
    return "OK";  
}

function feeFor(amountPaisa) {
  if (amountPaisa <= 5000) {
    return 50;
   }
    else {
    return 350;
  }
}

function routeMessage(gateway) {
  switch (gateway) {
    case "eSewa":
      console.log(" eSewa payment gateway");
      break;
    case "Khalti":
      console.log("Khalti payment gateway");
      break
    case "Fonepay":
      console.log("Fonepay payment gateway");
      break;
    default:
      console.log("No gateway.");
  }
}

let approvedCount = 0;
let rejectedCount = 0;
let totalValuePaisa = 0;
 
for (const transc of batch) {
  const result = validate(transc);
 
  if (result !== "OK") {
    rejectedCount++;
    console.log(`[REJECTED] ${transc.id} - ${result}`);
    continue;
  }
 
  routeMessage(transc.gateway);
  const fee = feeFor(transc.Amount);
  approvedCount++;
  totalValuePaisa += transc.Amount;
 
  console.log(`[APPROVED] ${transc.id} - amount: ${transc .Amount}, fee: ${fee}`);

  console.log(`Total approved transactions: ${approvedCount}`);
  console.log(`Total rejected transactions: ${rejectedCount}`);
  console.log(`Total value of approved transactions: ${totalValuePaisa}`);
}