let budget = parseFloat(prompt("Enter a budget:"));

if (budget >= 0 && budget <= 1000)
{
    alert("Low budget!");
}else if (budget >= 1001 && budget <= 3000)
{
    alert("Medium budget!");
} else
{
    alert("High budget!");
}