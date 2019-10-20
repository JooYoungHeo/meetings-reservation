import fs from 'fs';
import path from 'path';

const {mysql} = JSON.parse(fs.readFileSync(path.join(__dirname + '../../../properties.json'), 'utf-8'));

export {mysql};