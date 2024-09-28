const app = require('./app');
const db = require('./config/db')
const userModel = require('./MVC/Models/user.model');

const port = 2000;

app.get('/', (req, res) => {
    res.send("Message it seems!");
});

app.listen(port, () => {
    console.log("Server listening on port: " + port);
});