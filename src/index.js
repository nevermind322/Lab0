alert("Let's integrate!");
p1 = prompt("a = ", 0);
p2 = prompt("b = ", 0);
function calculate(a, b, f) {
    if (isNaN(a) || isNaN(b))
        alert("Wrong input!")      
    else {
        a = Math.round(a)
        b = Math.round(b)
    }
    if (a > b) {
        alert("Wrong interval!")  
    }
    n = 1000
    sum = f(a) + f(b)
    dx = (b-a)/n
    for (let i = 1; i < n; i++ ) {
        sum += 2 * f(a + dx*i)
    }
    sum /=2
    sum *=dx
    alert("S(trap) = " + sum);
}

let var4  = (x) => x*x -x + 1 

calculate(p1, p2, var4)