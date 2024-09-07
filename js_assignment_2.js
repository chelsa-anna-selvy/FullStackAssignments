let n = 5
function is_even(n)
{
    if(n % 2 == 0)
    {
        return "Even"
    }
    else
    {
        return "Odd"
    }
}

let result = is_even(n)
console.log(result)