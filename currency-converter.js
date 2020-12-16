// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.


// --------------------------------------------------
// Step 1: Capture user input
process.argv.map(function(item) {

    return item;
    });

    var amount = process.argv[2];
    var initialCurrency = process.argv[3];
    var targetCurrency = process.argv[4];
//    console.log('first = ',amount);
//    console.log('initialCurrency = ',initialCurrency);
//    console.log('targetCurrency = ',targetCurrency);        
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.



// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

if (amount == null )
{
console.log('OOPS, Please input correct format for (amount)');
}

if ( initialCurrency == null ) {
console.log('OOPS, Please input correct format for initialCurrency such as CAD USD RIAL');
}

if ( targetCurrency == null) {
    console.log('OOPS, Please input correct format for targetCurrency such as CAD USD RIAL');
}


if ( targetCurrency == initialCurrency) {
    console.log('OOPS, Please input Different currency ');
}


// If any of the required information is missing, display a meaningful message
// and exit the program.



// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/



// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists

// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.

if (isNaN(initialCurrency) && isNaN(targetCurrency) ) {
console.log('');
} else {
initialCurrency=initialCurrency.toUpperCase();
targetCurrency=targetCurrency.toUpperCase();
};


// Correct Input
if (initialCurrency == 'C' || initialCurrency == 'CA' ) {
    initialCurrency = 'CAD'
};
if (initialCurrency == 'U' || initialCurrency == 'US' ) {
    initialCurrency = 'USD'
};
if (initialCurrency == 'R' || initialCurrency == 'RI' ) {
    initialCurrency = 'RIAL'
};

if (targetCurrency == 'C' || targetCurrency == 'CA' ) {
    targetCurrency = 'CAD'
};
if (targetCurrency == 'U' || targetCurrency == 'US' ) {
    targetCurrency = 'USD'
};
if (targetCurrency == 'R' || targetCurrency == 'RI' ) {
    targetCurrency = 'RIAL'
};


// --------------------------------------------------

var Rate;
Rate = 0;
if (initialCurrency == 'CAD' && targetCurrency == 'USD') {
    Rate = 1/1.32;
};
if (initialCurrency == 'CAD' && targetCurrency == 'RIAL') {
    Rate = 220000;
};
if (initialCurrency == 'USD' && targetCurrency == 'CAD') {
    Rate = 1.32;
};
if (initialCurrency == 'USD' && targetCurrency == 'RIAL') {
    Rate = 280000;
};
if (initialCurrency == 'RIAL' && targetCurrency == 'USD') {
    Rate = 1/280000;
};
if (initialCurrency == 'RIAL' && targetCurrency == 'CAD') {
    Rate = 1/220000;
};

  
amount=amount*Rate;


// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.



// --------------------------------------------------
// Step 6: Display results

if (isNaN(amount)) {
    console.log('Your Input doesnt have result');
} else {
    console.log(amount);
};

// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.

// This message should also include the original amount and currency information
// supplied by the user.