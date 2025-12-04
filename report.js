const newman = require('newman');
require('dotenv').config();
 
newman.run({
    //collection:`https://api.postman.com/collections/44302140-4b85ba2b-8efb-42f1-b42d-00c714210df3?access_key=${process.env.pmatkey}`,
    collection:`https://api.postman.com/collections/44302140-4b85ba2b-8efb-42f1-b42d-00c714210df3?access_key=${process.env.pmatkey}`,
    //collection:require('./collection/dmoney.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
