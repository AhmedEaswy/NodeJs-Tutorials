const fs = require('fs');

for (let i = 0; i < 10; i++) {
    fs.writeFileSync(`hello${i+1}.txt`, `${i+1} - hello from node.js here `)
}
