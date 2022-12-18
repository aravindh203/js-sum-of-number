let a=parseInt(prompt("enter the number"))
let b;
let c=0;
for(i=1;a!==0;i++){
    b=a%10;
    a=(a-b)/10;
    c=c+b;
}
document.write(c)
