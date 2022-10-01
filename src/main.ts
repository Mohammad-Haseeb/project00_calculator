#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

clear();
console.log(
  chalk.red(
    figlet.textSync('Calculator Project00', { horizontalLayout: 'full' })
  )
)

import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Fisrt_Number',
      message: 'Enter your First number',
      default: '0',
    },
    {
      type: 'input',
      name: 'Second_Number',
      message: 'Enter your Second number',
      default: '0',
    },
    
    {
      type: 'list',  
      name: 'Operation_symbol',
      message: 'Which operation do you want to do?',
      default: '+',
      choices: [
        '+',
        '-',
        '/',
        '*'
      ],
    },
  ])
  .then(answers => {
    // const data =answers.Fisrt_Number;
    if(Number(answers.Fisrt_Number) && Number(answers.Second_Number)){
      
    
    if(answers.Operation_symbol==="+"){
      console.log(
        chalk.blue(
          figlet.textSync(`Answer is : ${Number(answers.Fisrt_Number)+Number(answers.Second_Number)}`)
        )
      )
    }
    else if(answers.Operation_symbol==="-"){
      console.log(
        chalk.blue(
          figlet.textSync(`Answer is : ${Number(answers.Fisrt_Number) - Number(answers.Second_Number)}`)
        )
      )

    }
    else if(answers.Operation_symbol==="/"){
      console.log(
        chalk.blue(
          figlet.textSync(`Answer is : ${Number(answers.Fisrt_Number) / Number(answers.Second_Number)}`)
        )
      )
    }
    else if(answers.Operation_symbol==="*"){
      console.log(
        chalk.blue(
          figlet.textSync(`Answer is : ${Number(answers.Fisrt_Number) * Number(answers.Second_Number)}`)
        )
      )

    }
   
  }
  else{
    console.log(
      chalk.red(
        'Wrong inputs, Kindly enter number'
      )
    )
  }
  })