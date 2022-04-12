//bài 1: tính tiền lương nhân viên
/**
 * - Đầu vào
 *  + luong1Ngay=100000
 *  + soNgayLam=25
 * 
 * - Xử lý
 *  + luong= luong1Ngay*soNgayLam
 *  + in kết quả ra console
 * 
 * - Đầu ra
 *  + Tiền lương nhân viên
 */

var luong1Ngay = 100000;
var soNgayLam = 25;
var currentFormat = new Intl.NumberFormat("vn-VN");
var luong = luong1Ngay * soNgayLam;
console.log("Lương của nhân viên là: " + currentFormat.format(luong));

//bài 2: tính giá trị trung bình
/**
 * - Đầu vào
 * + soThuc1=100
 * + soThuc2=25
 * + soThuc3=30
 * + soThuc4=21
 * + soThuc5=50
 * 
 * - Xử lý
 *  + tong5SoThuc= soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5
 *  + trungBinh5SoThuc = tong5SoThuc / 5
 *  + in kết quả ra console
 * 
 * - Đầu ra
 *  + Trung bình 5 số thực
 */

var soThuc1 = 100;
var soThuc2 = 25;
var soThuc3 = 30;
var soThuc4 = 21;
var soThuc5 = 50;
var tong5SoThuc = soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5;
var trungBinh5SoThuc = tong5SoThuc / 5;
console.log("Trung bình 5 số thực: " + trungBinh5SoThuc);

//bài 3: quy đổi tiền
/**
 * - Đầu vào
 * + soUSD=2
 * + giaUSD=23500 VND 
 * 
 * - Xử lý
 *  + giaVND= soUSD * soVND 
 *  + in kết quả ra console
 * - Đầu ra
 *  + số tiền quy đổi VND
 */

var soUSD = 2;
var giaUSD = 23500;
var currentFormat = new Intl.NumberFormat("vn-VN");
var giaVND = soUSD * giaUSD;
console.log("Số tiền quy đổi VND: " + currentFormat.format(giaVND) + " VND");

//bài 4: tính diện tích, chu vi hình chữ nhật
/**
 * - Đầu vào
 * + AB=5
 * + BC=9 
 * 
 * - Xử lý
 *  + dienTich=AB*BC
 *  + chuVi=(AB+BC)/2
 *  + in kết quả ra console
 * 
 * - Đầu ra
 *  + Diện tích của hình chữ nhật
 *  + Chu vi của hình chữ nhật
 */

var AB = 5;
var BC = 9;
var dienTich = AB * BC;
var chuVi = (AB + BC) / 2;
console.log("Diện tích của hình chữ nhật: " + dienTich);
console.log("Chu vi của hình chữ nhật: " + chuVi);

/**
 * Gia su:
 * n=12 => 1 + 2 = 3
 * n=44 => 4 + 4 = 8
 * 
 * - Đầu vào
 * + n = 12
 * - Xử lý
 * + Tách lấy hàng chục: Math/floor(n/10) 
 * + Tách lấy hàng đơn vị: n%10
 * + Tổng 2 số hàng chục, dv
 * + in kết quả ra console
 * 
 * - Đầu ra: Tổng 2 ký số vừa nhập
 */

var n = 12;
var hangChuc = Math.floor(n / 10);
var hangDV = n % 10;
var tongKySo = hangChuc + hangDV;
console.log("Tong 2 ký số vừa nhập: " + tongKySo);