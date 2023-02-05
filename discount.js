/*
1. if ticket number is less than 100. per ticket price : 100.
2. if ticket number is more than 100. but less than 200. first 100 tickets will be 100/tickets. rest tickets will be 90 taka per piece.
    first 100 ---> 100tk
    rest -------->  90tk

3. if you purchase more than 200 tickets
    first 100 ----> 100tk
    101-200 ------>  90tk
    200+ --------->  70tk
*/  



function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= first100Rate){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if( ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice =restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = restTicketPrice + first100Price + second100Price;
        return totalPrice;
    }
}

const price = ticketPrice(220);
console.log(price);