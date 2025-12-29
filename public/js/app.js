// ### First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.

//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.

//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).

//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).

//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.

//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).

//             # History:
//             - Ability to view the entire transaction history.


// database lan5abiw fih info
let Databaseusers = []
// db n3tiw l user y5tre chno bgha ydire w la khtar exit nbkaw nswlouh 
let choisire = prompt("bonjoure,que souhaitez vouz-faire? (inscrire, connecter ,changer mot de passe , exit)")




    //   ila ma5tarch exit w 5tare sincrire 
    // db nbdaw b nameli3tina
    if (choisire == "inscrire") {
        let Name = prompt("Entrer votre Nom complet :")
        let trimn = Name.trim()

        if (trimn.length < 5) {
            console.log("le nom doit contenir au mois 5 caractére");
        } else {
            console.log("nom validé");
        }

        for (let character of trimn) {
            if (/\d/.test(character) || character === '@' || character === '#' || character === '$' || character === '%' || character === '^' || character === '&' || character === '*' || character === '(' || character === ')' || character === '!' || character === '~' || character === '`' || character === '-' || character === '+' || character === '=' || character === '{' || character === '}' || character === '[' || character === ']' || character === '|' || character === '\\' || character === ':' || character === ';' || character === '"' || character === "'" || character === '<' || character === '>' || character === ',' || character === '.' || character === '?') {
            }
            else {
               
                console.log("ressayez");
            }
        }
     // db ndouzo l email li 3tini 
        let email = prompt("Entrez votre email :");
        let trimemail = email.trim().toLowerCase();
        if (trimemail.includes(" ") && trimemail.length < 10 && email.split("@").length !== 2) {
            prompt("ressayez");
            console.log("email invalidé a cause de space ou mois de 10 carctere ou @ ");
        }
    else {
        console.log("email validé");
    }
   // db ndouzo l age li 3tini 
    let age = prompt("Entrer votre age :")
    let triage = age.trim()
    if ( isNaN(triage) || triage.length === 0 || triage.length >= 3) {
        console.log("age invalidé a cause de space ou caractere non numerique ou 0 caractere ou plus de 2 caractere");
    } else {
        console.log("age validé");
    }
   // db ndouzo l mot de passe li 3tini 
  


    let password = prompt("Entrer votre mot de passe :")
    let trimpassword = password.trim()
    let specialChars = ["@", "#", "-", "+", "*", "/"];
    let hasSpecialChar = specialChars.some(char => trimpassword.includes(char));
    if (/\s/.test(trimpassword) || !hasSpecialChar || trimpassword.length < 7) {
        console.log("mot de passe invalidé a cause de space ou pas de caractere special ou moins de 7 caractere");
    } else {
        console.log("mot de passe validé");
    }

// db ndouzo l confirmation mot de passe li 3tini 
    let password_confirmed = prompt("Confirmer votre mot de passe :")
    let trimpassword_confirmed = password_confirmed.trim()
    if (trimpassword !== trimpassword_confirmed) {
        console.log("mot de passe non confirmé");
    } else {
        console.log("mot de passe confirmé");
    }


    }
    Databaseusers.push({
    Name: trimn,
    email: trimemail,
    age: trimage,
    password: trimpassword,
})
console.log(Databaseusers);


