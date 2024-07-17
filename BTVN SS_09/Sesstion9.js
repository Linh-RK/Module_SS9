// bài 6 Tính chỉ số cân nặng của cơ thể
// let w = 70;
// let h = 1.58;
// let bmi = w / h ** 2;
// document.write(bmi);
// if (bmi < 18.5) {
//   document.write("cân nặng thấp");
// } else if (bmi >= 18.5 && bmi < 24.9) {
//   document.write("Binh thuong");
// } else if (bmi >= 25 && bmi < 29.9) {
//   document.write("Tien beo phi");
// } else if (bmi >= 30 && bmi < 34.5) {
//   document.write("Beo phi do I");
// } else if (bmi >= 35 && bmi < 39.9) {
//   document.write("Beo phi do II");
// } else {
//   document.write("Beo phi do III");
// }
// ===========================================
// 7. [Bài tập] Câu lệnh switch-case
// Nhập vào một số là số thứ tự của tháng trong năm
// Nhấn nút "Tính số ngày" thì sẽ hiển thị số ngày của tháng đó
// let thang = +prompt("Moi ban nhap thang vao");
// switch (thang) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     alert(`${thang} + "co 31 ngay"`);
//     break;
//   case 2:
//     alert(`${thang} + "co 28 ngay"`);
//     break;
//   case 2:
//   case 4:
//   case 6:
//   case 18:
//   case 11:
//     alert(`${thang} + "co 30 ngay"`);
//     break;
//   default:
//     alert("moi ban nhap lai");
// }
// ===========================================
// 8. [Bài tập] Máy tính đơn giản
// let a = +prompt("Moi ban nhap vao so a");
// let b = +prompt("Moi ban nhap vao so b");
// let logic = prompt("Moi ban nhap vao so các phép tính +, -, *, /");
// let result;
// switch (logic) {
//   case "+":
//     alert((result = a + b));
//     break;
//   case "-":
//     alert((result = a - b));
//     break;

//   case "*":
//     alert((result = a * b));
//     break;

//   case "/":
//     alert((result = a / b));
//     break;
// }
// ===========================================
// 9. [Bài tập] Tìm Max - Min
// ===========================================
// 10. [Bài tập] Ứng dụng tìm cung hoàng đạo
// let a = +prompt("Moi ban nhap vao so a");
// let b = +prompt("Moi ban nhap vao so b");
// let c = +prompt("Moi ban nhap vao so c");
// ========================================
// let thang = +prompt("Moi ban nhap vao thang sinh");
// let ngay = +prompt("Moi ban nhap vao ngay sinh");
// if (thang > 12 || thang < 1 || ngay > 31 || ngay < 1) {
//   alert("Moi ban nhap lai");
// } else {
//   switch (thang) {
//     case 1:
//       ngay < 20 ? alert("Cung ma ket") : alert("Cung bao binh");
//       break;
//     case 2:
//       ngay < 19 ? alert("Cung bao binh") : alert("Cung song ngu");
//       break;
//     case 3:
//       ngay < 21 ? alert("Cung song ngu") : alert("Cung bach duong");

//       break;
//     case 4:
//       ngay < 21 ? alert("Cung bach duong") : alert("Cung kim nguu");

//       break;
//     case 5:
//       ngay < 21 ? alert("Cung kim nguu") : alert("Cung song tu");

//       break;
//     case 6:
//       ngay < 22 ? alert("Cung su tu") : alert("Cung cu giai");

//       break;
//     case 7:
//       ngay < 23 ? alert("Cung cu giai") : alert("Cung su tu");

//       break;
//     case 8:
//       ngay < 23 ? alert("Cung su tu") : alert("Cung xu nu");

//       break;
//     case 9:
//       ngay < 23 ? alert("Cung xu nu") : alert("Cung thien binh");

//       break;
//     case 10:
//       ngay < 24 ? alert("Cung thien binh") : alert("Cung bo cap");

//       break;
//     case 11:
//       ngay < 23 ? alert("Cung bo cap") : alert("Cung nhan ma");

//       break;
//     case 12:
//       ngay < 22 ? alert("Cung nhan ma") : alert("Cung ma ket");
//   }
// }
// ===========================================
// Bài 11 Bài Tâp Decision Making (1).
// =====================================
// Bài 1: Viết chương trình nhập vào số tuổi của 1 người.Nếu số tuổi người đó >=18 tuổi , hiển thị thông báo trên 18 tuổi ngược lại bạn chưa đủ 18 tuổi!
// let age = +prompt("Moi ban nhap vao tuoi cua minh");
// age >= 18 ? alert("Tren 18 tuoi") : alert("Duoi 18 tuoi");
// =====================================
// Bài 2: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.

// Nếu dưới 18h thì hiển thị : “Good day”.

// Nếu trên 18h thì hiển thị : “Good evening”.
// let hour = +prompt("Moi ban nhap gioi hien tai");
// hour < 18 ? alert("Good day") : alert("Good evening");
// ======================================
// Bài 3: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.

// Nếu trước 10h thì hiển thị : “Good morning”.

// Nếu thời gian chưa tới 20h thì hiển thị : “Good day”.

// -Nếu sau 20h hiển thị : “Good evening”.
// let time = +prompt("Moi ban nhap vao gio hien tai");
// time < 10
//   ? alert("Good morning")
//   : time < 20
//   ? alert("Good day")
//   : alert("Good evening");
// ======================================
//Bài 4: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng câu điều kiện if-else).
// let a = +prompt("Moi ban nhap vao so a");
// if (a % 2 == 0) {
//   alert("so chan");
// } else {
//   alert("so le");
// }
// ======================================
// Bài 5: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng switch case).
// let a = +prompt("Moi ban nhap vao so a");
// switch (a % 2) {
//   case 0:
//     alert("so chan");
//     break;
//   default:
//     alert("so le");
// }

// ======================================
// Bài 6: Viết chương trình cho phép người dùng nhập màu vào kiểm tra.

// Nếu nhập 1 trong các màu : xanh, đỏ,vàng thì hiển thị màu người dùng nhập

// Nếu nhập màu khác hiển thị màu không hợp lệ!
// let mau = prompt("Moi ban nhap vao mau");
// switch (mau) {
//   case "xanh":
//   case "đỏ":
//   case "vàng":
//     alert(mau);
//     break;
//   default:
//     alert("mau khong hop le");
// }
// ======================================
// Bài 7: Viết chương trình cho phép người dùng nhập vào số nguyên x:

// Nếu x==0 thì in ra x có giá trị là 0;

// Nếu x>0 thì in ra x là số nguyên dương.

// // Nếu x<0 thì in ra x là số nguyên âm.
// let a = +prompt("Moi ban nhap so nguyen a");
// switch (true) {
//   case a > 0:
//     alert("So nguyen duong");
//     break;
//   case a == 0:
//     alert("a co gia tri 0");
//     break;
//   case a < 0:
//     alert("So nguyen am");
//     break;
// }

// ======================================
// Bài 9: Viết chương trình cho phép người dùng nhập điểm các môn:Toán,Lí,Hoá,
// Văn, Sử , Địa (thang điểm 10);

// Sau đó tính điểm trung bình các môn học

// Hiển thị kết quả học tập theo loại như sau:

// 8.0 <=ĐTB<=10: xếp loại GIỎI.

// 6.5<=ĐTB<=7.9: xếp loại KHÁ.

// 5.0<=ĐTB<=6.4: xếp loại TRUNG BÌNH.

// ĐTB<5.0 : xếp loại YẾU.

//
// let toan = +prompt(" Moi ban nhap diem toan");
// let li = +prompt(" Moi ban nhap diem li");
// let hoa = +prompt(" Moi ban nhap diem hoa");
// let van = +prompt(" Moi ban nhap diem van");
// let su = +prompt(" Moi ban nhap diem su");
// let dia = +prompt(" Moi ban nhap diem dia");
// let average = (toan + li + van + su + dia + hoa) / 6;
// if (average >= 8 && average <= 10) {
//   alert("xếp loại GIỎI");
// } else if (average >= 6.5 && average <= 7.9) {
//   alert("xếp loại KHÁ.");
// } else if (average >= 5.0 && average <= 6.4) {
//   alert("xếp loại TRUNG BÌNH");
// } else {
//   alert("xếp loại YẾU.");
// }
// ======================================
// Bài 10: Viết chương trình nhập vào số tháng trong năm,in ra số ngày trong tháng đó.

// Ví dụ : Người dùng nhập vào số 7 thì in ra tháng 7 có 31 ngày.
// đã làm ở trên
