
////bai 1:
// function giaiThua(n){
// if(n==0){
//     return 1;
// }
//  return n*(giaiThua(n-1));
// }
// // chuong trinh chinh 
// let n = prompt(alert(`nhap vao so bat ki nhe:`));
// if(n<0){
//     console.log(`invalid input`);}
// else {
// console.log(`giai thua cua `+n + ` = `+ giaiThua(n));
// }
 
//bai 2 : 
// let name = prompt(alert('nhap vao ho ten nguoi dung:'));
// let age = Number(prompt(alert(`nhap vao tuoi nguoi dung`)));
// if(age < 18) console.log((name+` chưa đủ tuổi vào trang web này nhé:`));
// else {
//    let question =  prompt(name+` có muốn đăng nhập vào trang web này không?  yes or no`);
//         if(question == `yes`) {
//             alert(name +` đã vào trang web này thành công `);
//         }
//         if(question== `no`) alert(name + ` thoát khỏi trang web`);
// }

//bai 3:
// let userName2=1,passWord2=1;
// let userName = prompt(alert(`nhập vào username:`));
// let passWord = prompt(alert(`nhập vào password:`));
// //bai lam
// console.log(`userName = `+userName +`\n passWord = `+ passWord );


// if(userName == userName2 && passWord == passWord2){
//     alert(`chúc mừng bạn đã đăng nhập thành công`);
// }
// else if(userName != userName2){
//     alert(`userName sai!`);
// }
// else if(passWord != passWord2){
//     alert(`passWord sai!`);
// }

//bai 4:
// let n = Number(prompt(alert(`nhap vao thang can xet`)));
// let name = prompt(alert(` nhập vào tên người dùng:`));
// switch (n){
//     case 1:
//     case 2:
//     case 3:
//         alert(name +` sinh vào mùa xuân`);   
//         break;     
//     case 4:
//     case 5:
//     case 6:
//         alert(name+` sinh vào mùa hạ`);
//         break ;
//     case 7:
//     case 8:
//     case 9:
//        alert(name+ ` sinh vào mùa thu`);
//         break ;
//     case 10:
//     case 11:
//     case 12:
//         alert(name + ` sinh vào mùa đông`);
//         break;
//     default:
//         alert(`thang bạn nhập không tồn tại:@@`);
        
// }

//bai 5: giai PTB2
// let name  = prompt(alert(`nhap ten nguoi dung`));
// let question = `yes`;
// while(question==`yes`){
//     /////////////// trong vong lap
// let a,b,c,delta;
// a = Number(prompt(`nhap vao a:`));
// b = Number(prompt(`nhap vao b:`));
// c = Number(prompt(`nhap vao c:`));
// /*
// let x1 = Number((-b-Math.sqrt(delta))/(2*a)); (tai sao gan gia trị = x1 mà khi in ra x1 == NaN)
// let x2 = Number((-b+Math.sqrt(delta))/(2*a));  (tương tự x1) */
// delta =Number( b*b - 4*a*c);
// console.log(a+` ` + b+ ` ` + c);
// console.log(`\n delta = `+delta);
// console.log(`sqrt(delta) = `+ Math.sqrt(delta));

// /*
// console.log(`x1 = `+ x1+ ` x2 = `+ x2);   (khi in ra giá trị == Nan)
// console.log(typeof(x1));   (mặc dù giá trị này == Number) */
// console.log(`x1 = `+ Number((-b-Math.sqrt(delta))/(2*a)));
// console.log(`x2 = `+ Number((-b+Math.sqrt(delta))/(2*a)));




// if(a==0){
//     if(b==0){
//         if(c==0) console.log(`phuong trinh co vo so nghiem`);
//         else  console.log(`phuong trinh vo nghiem`);
//     }
//     else console.log(`phuong trinh co nghiem x = `+ (-c/b));
// }
// else {
// if(delta <0) console.log(`phuong trinh vo nghiem`);
// if(delta == 0) console.log(`phuong trinh co nghiem kep x1 = x2 = `+ (-b/(2*a)));
// if(delta > 0) {console.log(`phuong trinh co nghiem kep x1, x2`);
// console.log(`x1 = `+ Number((-b-Math.sqrt(delta))/(2*a)));
// console.log(`x2 = `+ Number((-b+Math.sqrt(delta))/(2*a)));
// }
// }

// question = prompt(alert(name+ `người dùng có muốn sử dụng trương trình tiếp không:  yes or no`));
// }
///////////////het bai 5

//bai 6:
// let name = prompt(alert(`nhập tên người dùng: `));
// let question = `yes`;
// while(question == `yes`){
// let randomString = prompt(alert(`nhap vao chuoi bat ki`));
// let newString =``;
// let i;
// for(i = randomString.length -1;i>=0;i--){
//     newString += randomString[i];
// }
// alert(`chữ cái đảo ngược là: `+newString);
// question = prompt(alert(name+ ` có muốn tiếp tục trương trình, input: yes or no`));
// }