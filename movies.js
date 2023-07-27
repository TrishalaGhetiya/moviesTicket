// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const wifeBringsTickets = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     },1000)
// })

// const getPopcorn = wifeBringsTickets.then((t) => {
//     console.log('husband : we should go in');
//     console.log('wife : no I am hungry');
//     return new Promise((resolve,reject) => resolve(`popcorn ${t}`))
// })

// const getButter = getPopcorn.then((t) => {
//     console.log('husband : i got popcorn, we should go in');
//     console.log('wife : i want butter on my popcorn');
//     return new Promise((resolve,reject) => resolve(`butter ${t}`))
// })
// const getColdDrinks = getButter.then((t) => {
//     console.log('husband : here is your popcorn with butter.');
//     console.log('wife : Thank You honey but can you get us some colddrinks?');
//     console.log('husband : Sure');
//     return new Promise((resolve,reject) => resolve(`ColDrinks ${t}`))
// })

// getColdDrinks.then((t) => console.log(t));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const premovie = async () => {

    const wifeBringsTickets = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),1000)
    })
    const getPopcorn = wifeBringsTickets.then((t) => {
        return new Promise((resolve,reject) => resolve(`popcorn ${t}`))
    })
    const getButter = getPopcorn.then((t) => {
        return new Promise((resolve,reject) => resolve(`butter ${t}`))
    })
    const getColDrinks = getButter.then((t) => {
        return new Promise((resolve,reject) => resolve(`ColDrinks ${t}`))
    })
    let ticket = await wifeBringsTickets;
    console.log('husband : we should go in');
    console.log('wife : no I am hungry');

    let popcorn = await getPopcorn;
    console.log('husband : i got popcorn, we should go in');
    console.log('wife : i want butter on my popcorn');

    let butter = await getButter;
    console.log('husband : here is your popcorn with butter.');
    console.log('wife : Thank You honey but can you get us some colddrinks?');
    console.log('husband : Sure');

    return ticket;
}
premovie().then((m) => console.log(m))
console.log('person4: shows ticket');
console.log('person5: shows ticket');