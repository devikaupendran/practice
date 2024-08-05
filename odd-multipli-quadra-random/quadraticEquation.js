/*   Quadratic equation : (-b ± √b2-4ac)/2a
    discriminant : b2-4ac
        if discriminant > 0 : (-b ± √b2-4ac)/2a
        if discriminant = 0 : -b/2a
        if discriminant < 0 : -b/2a + (- √b2-4ac)/2a
*/

let a = prompt("Enter the first number ");
let b = prompt("Enter the second number ");
let c = prompt("Enter the third number ");
a = Number(a);
b = Number(b);
c = Number(c);
let result = document.getElementById("result");
let root1;
let root2;

let discriminant = b * b - 4*a*c ;
if (discriminant > 0){
    root1 = (-b + Math.sqrt(discriminant)) / 2*a;
    root2 = (-b - Math.sqrt(discriminant)) / 2*a;
    result.innerHTML = `RESULT <br> <br> root 1 : ${root1} <br> <br> root 2 : ${root2}`;
}
else if(discriminant == 0 ){
    root1 = root2 = -b / (2*a);
    result.innerHTML = `RESULT <br> <br> root 1 : ${root1} <br> <br> root 2 : ${root2}`;
}
else{
    let realPart = -b /2*a
    let imaginaryPart = (Math.sqrt(-discriminant)) / 2*a;
    result.innerHTML = `RESULT <br> <br> real part : ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i  <br> <br> imaginary part: ${imaginaryPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
}