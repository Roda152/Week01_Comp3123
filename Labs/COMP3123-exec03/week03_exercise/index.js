var http = require("http");
var employeeModule = require('./Employee'); // Use Employee Module here
console.log("Lab 03 - NodeJs");

//TODO - Fix any errors you found working with lab exercise

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); // Setting content type as JSON by default

    if (req.method !== 'GET') {
        res.statusCode = 405; // Method Not Allowed
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
        return; // Exit after this response
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.setHeader('Content-Type', 'text/html');
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            return; // Exit after this response
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            const employees = employeeModule.getAllEmployees();
            res.end(JSON.stringify(employees));
            return; // Exit after this response
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            const employeeNames = employeeModule.getEmployeeNames();
            res.end(JSON.stringify(employeeNames));
            return; // Exit after this response
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format
            const totalSalary = employeeModule.getTotalSalary();
            res.end(JSON.stringify({ total_salary: totalSalary }));
            return; // Exit after this response
        }

        // Return 404 if no route matches
        res.statusCode = 404; // Not Found
        res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
    }
});

// Start server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
