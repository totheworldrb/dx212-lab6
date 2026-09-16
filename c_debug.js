// สาเหตุของบั๊ก: 
// 1. ใน filter() มีการใช้ปีกกา { b.late } แต่ไม่มีคำสั่ง return ทำให้คืนค่า undefined เสมอ
// 2. ใน reduce() ไม่ได้ใส่ค่าเริ่มต้น 0 ทำให้รอบแรกดึง Object ทั้งก้อนไปบวกกับตัวเลข
/*
const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];
 
const lateRoutes = buses.filter(b => { b.late }).map(b => b.route);
const total = buses.reduce((sum, b) => sum + b.passengers);
 
console.log("สายที่มาสาย:", lateRoutes);   // ควรได้ ["NGV-2", "NGV-3"]
console.log("ผู้โดยสารรวม:", total);      // ควรได้ 145
*/

//แบบแก้ไขแล้ว
const buses = [
    { route: "NGV-1", passengers: 45, late: false },
    { route: "NGV-2", passengers: 62, late: true },
    { route: "NGV-3", passengers: 38, late: true },
];

const lateRoutes = buses.filter(b => b.late).map(b => b.route);

const total = buses.reduce((sum, b) => sum + b.passengers, 0);

console.log("สายที่มาสาย:", lateRoutes); 
console.log("ผู้โดยสารรวม:", total);     