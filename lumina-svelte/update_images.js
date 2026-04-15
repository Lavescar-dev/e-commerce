import fs from 'fs';
const ids = [...new Set(fs.readFileSync('ids.txt', 'utf8').trim().split('\n'))].slice(0, 50);
const content = fs.readFileSync('src/data/products.js', 'utf8');
const newArrayStr = 'export const validImages = [\n  ' + ids.map(id => `'${id}'`).join(',\n  ') + ',\n];';
const updatedContent = content.replace(/export const validImages = \[\s*([^\]]*)\s*\];/, newArrayStr);
fs.writeFileSync('src/data/products.js', updatedContent);
console.log('Updated products.js with ' + ids.length + ' image IDs');
