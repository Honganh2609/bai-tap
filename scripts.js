let USD2VND = function(a){
    let tong = a * 23500; // Cong thuc tinh toan
    console.log(`${a}USD = ${tong}VND`); // giao dien Hien thi ra console
}
USD2VND(10) // Goi gia tri cua a

let compoundInterrest = function (P,r) {
    let A = P * (1 + r / 1)**(1 * 10);
    console.log (`Tiền lãi gửi theo năm sau 10 năm của bạn là: ${A}VND`);
}
compoundInterrest(1000000,0.07)

let compoundInterrestMonth = function (P,r) {
    let B = P * (1 + r / 1)**(12 * 10);
    console.log (`Tiền lãi gửi theo tháng sau 10 năm của bạn là: ${B}VND`);
}
compoundInterrestMonth(1000000,0.007)

let compoundInterrestQuarter = function (P,r) {
    let A = P * (1 + r / 1)**(4 * 10);
    console.log (`Tiền lãi gửi theo quý sau 10 năm của bạn là: ${A}VND`);
}
compoundInterrestQuarter(1000000,0.02)




