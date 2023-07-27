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


const init = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'firstQues',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', "View All Roles", "Add Role", "View All Departments", "Add Deparment"]
    },

  ])

    .then((response) => {
      console.log(response);
      if (response.firstQues === "View All Employees") {
        viewEmployees();
      }
      if (response.firstQues === "Add Employee") {
        addEmployee();
      }
      if (response.firstQues === "Update Employee Role") {
        updateRoll();
      }
      if (response.firstQues === "View All Roles") {
        viewAllRoles();
      }
      if (response.firstQues === "Add Role") {
        addRoll();
      }
      if (response.firstQues === "View All Departments") {
        viewAllDepartments();
      }
      if (response.firstQues === "Add Deparment") {
        addDept();
      }
    })
    .catch(err => {
      console.log(err)
    })

}

init();

const viewEmployees = () => {
  db.query(`SELECT * FROM employee LEFT JOIN dep_role ON employee.dep_role_id = dep_role.id`, (err, results) => {
    err ? console.log(err) : console.table(results);
    init();
  })
};


const viewAllRoles = () => {
  db.query(`SELECT * FROM dep_role`, (err, results) => {
    err ? console.log(err) : console.table(results);
    init();
  })
};

const viewAllDepartments = () => {
  db.query(`SELECT * FROM department`, (err, results) => {
    err ? console.log(err) : console.table(results);
    init();
  })
};

const addDept = () => {
  inquirer.prompt(
    {
      type: 'input',
      message: 'What is the name of the department?',
      name: 'addDep',
    },
  )
    .then(answers => {
      db.query(`INSERT INTO department(name) VALUES ("${answers.addDep}")`, (err, results) => {
        err ? console.log(err) : console.log(results);
        init();
      })
    })
}

const addRoll = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of the role?',
      name: 'addRole',
    },
    {
      type: 'input',
      message: 'What is the salary of the role?',
      name: 'salaryRole',
    },

    {
      type: 'input',
      message: 'Which department id does the role belong to?',
      name: 'roleDep',
    },
  ])
    .then(answers => {
      db.query(`INSERT INTO dep_role(title, salary, department_id) VALUES ("${answers.addRole}", ${answers.salaryRole}, ${answers.roleDep})`, (err, results) => {
        err ? console.log(err) : console.table(results);
        init();
      })
    })
}

const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: "What is the employee's first name?",
      name: 'firstName',
    },
    {
      type: 'input',
      message: "What is the employee's last name?",
      name: 'lastName',
    },

    {
      type: 'input',
      message: "What is the employee's role id?",
      name: 'roleID',
    },
    {
      type: 'input',
      message: "What is the employee's manager id?",
      name: 'managerID',
    },
  ])
    .then(answers => {
      db.query(`INSERT INTO employee(first_name, last_name, dep_role_id, manager_id) VALUES ("${answers.firstName}", "${answers.lastName}", ${answers.roleID}, ${answers.managerID})`, (err, results) => {
        err ? console.log(err) : console.table(results);
        init();
      })
    })

}

const updateRoll = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: "What is the employee's id?",
      name: 'employeeID',
    },
    {
      type: 'input',
      message: "What is the employee's new role id?",
      name: 'roleID',
    },

  ])
    .then(answers => {
      db.query(`UPDATE employee SET dep_role_id = ${answers.roleID} WHERE id = ${answers.employeeID}`, (err, results) => {
        err ? console.log(err) : console.table(results);
        init();
      })
    })
}
