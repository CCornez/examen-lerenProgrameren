import Painting from './modules/Paining.js';
import Painter from './modules/Painter.js';

let david = new Painter('David', 'Verhulst', 'abstract');
david.addPainting = new Painting('Java', '500x200', 1920);
david.addPainting = new Painting('script', '350x100', 220);
david.addPainting = new Painting('Node', '40x20', 20020);

console.log(david);
console.log(david.printHtml);
