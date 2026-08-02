// TODO: Avoid these type of conversions
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// Here equality (==) check & comparision < , > , <= , >= works differently , comparision check converts null to a number treating it as 0 .  

// === (STrict Checking)
