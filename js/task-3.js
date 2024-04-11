function checkForSpam(message) {
    const hasSpamSale = message.toLowerCase();
    return hasSpamSale.includes("spam") || hasSpamSale.includes("sale");
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter")); 
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message")); 
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?")); 