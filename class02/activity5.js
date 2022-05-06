let product1;
let product2;
let product3;
let product4;
let flag;

do {
    
    product1 = prompt("Enter product 1:");
    product2 = prompt("Enter product 2:");
    product3 = prompt("Enter product 3:");
    product4 = prompt("Enter product 4:");

    if (product1 != "" && product2 != "" && product3 != "" && product4)
    {
        alert(`order: ${product1}  ${product2}   ${product3}  ${product4}`);
        flag = false;
    }else
    {
        alert("Es necesario ingresar todos los productos");
        flag = true;
    }

}while(flag);

