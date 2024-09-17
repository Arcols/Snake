import { Cell,cellsType } from './modules/Cell.js';
import { Snake } from './modules/Snake.js';
import { Grid } from './modules/Grid.js';
import { Fruit } from './modules/Fruit.js';

let grille = new Grid();
console.log(grille.getBaseGridSize());
let fruit = new Fruit();
console.log(fruit.placeFruit());
