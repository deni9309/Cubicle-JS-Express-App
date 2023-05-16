const fs = require('fs');
const path = require('path');
const db = require('../db.json');

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    static Save(cube) {
        db.cubes.push(cube);
        const jsonData = JSON.stringify(db, null, 2); // 'null, 2' options make json formatted

        fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData);
    }
}

module.exports = Cube;