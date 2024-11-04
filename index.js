const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`App running on port ${port}`);
    });
}

module.exports = app; // Add this line to export the app
