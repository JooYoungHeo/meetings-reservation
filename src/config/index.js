import fs from 'fs';
import path from 'path';

const {mysql, redis} = JSON.parse(fs.readFileSync(path.join(__dirname + '../../../properties.json'), 'utf-8'));

export {mysql, redis};