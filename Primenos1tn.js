// 1 2 3 5 7 

let n = 100;

// let fact = false;

// function printprimenos(n)
// {
//     let f =0;
//     for(let i=2;i<=n;i++)
//     {
//         c=0;
//        for(let j =2;j<=i;j++)
//        {
//            if(i%j==0)
//            {
//             c++;
//            }
//        }
//        if(c==1)
//        {
//         console.log(i)
//        }
//     }
// }


// printprimenos(100)

// Efficient sol.
// sieve of erarasthesus algo

// let n = 100;

let prime = [n+1];

prime.fill(1)
prime[0] = 0
prime[1] = 0
for(let i =2;i<=n;i++)
{
    if(prime[i])
    {
        for(let j=2;j*i<=n;j++)
        {
            prime[j*i] = 0;
        }
    }
}
for(let i=2;i<=n;i++)
{
    if(prime[i] == 1)
    console.log(i)
}

