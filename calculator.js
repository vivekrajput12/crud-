// exports.calculator = (num1 , num2,op)=>{
//     // var result;
//     const number1 = parseFloat(num1);
//     const number2 = parseFloat(num2);

//     switch(op){
//         case op==='+':
//            return number1+number2;
//         case op==='-':
//             return number1-number2;
//         case op==='*':
//             return number1*number2;
//         case op==='/':
//             return  number1/number2;
//         default:
//             return 'Invalid operator or input';
//     }
//     // res.status(201).send(result);

// }
const calculator = (num1, num2, op) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (op) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return 'Invalid operator or input';
    }
};
module.exports = calculator;