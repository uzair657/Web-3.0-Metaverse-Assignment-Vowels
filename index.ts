//Write A Program that will get a Charecter input from user and tell is it a vowel or not
import inquirer from "inquirer";
import chalk from "chalk";
let response = await inquirer.prompt([
    {
        name: "char",
        type: "String",
        message: chalk.green("Enter a Character: "),
    },
    
]);

if(response.char=='a'||response.char=='e'||response.char=='i'||response.char=='o'||response.char=='u'||response.char=='A'||response.char=='E'||response.char=='I'||response.char=='O'||response.char=='U'){
    console.log(chalk.green("The Given Character is a vowel."));

}else{
    console.log(chalk.green("The Given Character is not a vowel"));
}