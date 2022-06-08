let USD2VND = function(a){
    let tong = a * 23500; // Cong thuc tinh toan
    console.log(`${a}USD = ${tong}VND`); // giao dien Hien thi ra console
}
USD2VND(10) // Goi gia tri cua a

let USDToVND = function() {
    let a = prompt("Nhập số USD bạn muốn quy đổi");
    let vnd = a * 23500; // Công thức quy đổi 
    console.log(`${a}USD đổi được ${vnd}VND`)
}
USDToVND()

let compoundInterrest1 = function(){
    let p = prompt("Số tiền bạn muốn tiết kiệm");
    let n = prompt("Số năm bạn muốn gửi")
    let tong = p * (1 + 0.07/1)**(1 * n);
    console.log(`Tổng số tiền bạn nhận được sau ${n} năm là: ${tong}VND`)
}
compoundInterrest1()

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




