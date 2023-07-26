// Import and require inquirer and mysql2
const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'hello',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );



inquirer.prompt ([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'firstQues',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', "View All Roles", "Add Role", "View All Departments", "Add Deparment"]
    },
    // {
    //     type: 'input',
    //     message: 'Enter a text color, a hexadecimal number is also accepted.',
    //     name: 'textColor',
    // },
    // {
    //     type: 'list',
    //     message: 'Please choose a shape from the options listed.',
    //     name: 'shape',
    //     choices: ['Circle', 'Triangle', 'Square']
    // },
    // {
    //     type: 'input',
    //     message: 'Enter the shape color, a hexadecimal number is also accepted.',
    //     name: 'shapeColor',
    // },

])


.then((response) => {
    console.log(response);
})
.catch (err => {
        console.log(err)
   })