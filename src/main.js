import { add, multiply } from "./math.js";
import { formatNumber } from "./utils.js";

console.log("=== App Starting ===");
const sum = add(5, 3);
const product = multiply(4, 7);

console.log("Sum:", formatNumber(sum));
console.log("Product:", formatNumber(product));
console.log("=== App Finished ===");
