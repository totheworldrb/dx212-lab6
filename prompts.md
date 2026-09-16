## Part A1 — Prompt แย่
**Prompt:** เขียนฟังก์ชันคำนวณค่ารถให้หน่อย
**ผลลัพธ์ย่อ:** 
function calculateFare(distance, ratePerKm) {
    let totalFare = distance * ratePerKm;
    return totalFare;
}
let myFare = calculateFare(15, 5);
console.log("ค่ารถทั้งหมด: " + myFare + " บาท");
**ตรวจแล้ว:** ผิด (ไม่มีเงื่อนไขเฉพาะของ NGV และไม่ได้ใช้ Arrow Function)
**รอบที่ iterate:** 1 — เก็บไว้เทียบความต่าง

## Part A2 — calcFare
**Prompt:** คุณคือนักพัฒนา JavaScript อาวุโส
เขียนฟังก์ชัน calcFare(distanceKm)
สำหรับแอปรถ NGV ในมหาวิทยาลัย: 2 กม.แรก 10 บาท กม.ถัดไปคิด กม.ละ 2 บาท เศษของกิโลเมตรปัดขึ้น ระยะทางติดลบหรือไม่ใช่ตัวเลขให้คืน 0
ใช้ ES6 arrow function, ไม่ใช้ library ภายนอก, มี comment ภาษาไทยสั้น ๆ
ตอบเป็นโค้ดอย่างเดียว ตามด้วย console.log ทดสอบ 3 กรณี: 1.5, 2, 7.2
**ผลลัพธ์ย่อ:** ได้ฟังก์ชัน arrow function ที่มีการใช้ Math.ceil() เพื่อปัดเศษขึ้น พร้อม console.log ทดสอบ 3 กรณี
**ตรวจแล้ว:** ใช้ได้
**รอบที่ iterate:** 1 — ผ่านตั้งแต่รอบแรก

## Part B — อธิบายโค้ด
**Prompt:** const team = [
    { name: "ฟ้า", role: "PO", tasksDone: 5 },
    { name: "ต้น", role: "Dev", tasksDone: 8 },
    { name: "มายด์", role: "SM", tasksDone: 3 },
    { name: "เจ", role: "Dev", tasksDone: 6 },
];
const teamRoles = team.map(member => `${member.name} (${member.role})`);
console.log("1. Map:", teamRoles);
const devOnly = team.filter(member => member.role === "Dev");
console.log("2. Filter (Dev):", devOnly);
const totalTasks = team.reduce((sum, member) => sum + member.tasksDone, 0);
console.log("3. Reduce (Total Tasks):", totalTasks);
const devTasks = team.filter(member => member.role === "Dev").reduce((sum, member) => sum + member.tasksDone, 0);
console.log("4. Chain (Dev Tasks):", devTasks);
อธิบายโค้ดนี้ทีละบรรทัดให้นักศึกษาปี 2 ที่เพิ่งเรียน map/filter/reduce เข้าใจ ตอบเป็นภาษาไทย รูปแบบ: ตาราง 2 คอลัมน์ (บรรทัดโค้ด | ทําอะไร) ไม่เกิน 10 แถว
**ผลลัพธ์ย่อ:** ได้ตารางอธิบายการทำงานของ map/filter/reduce ของตัวแปร team อย่างชัดเจน
**ตรวจแล้ว:** ตรวจแล้วถูก ไม่มีอธิบายเกินจริง
**รอบที่ iterate:** 1 — ผ่านตั้งแต่รอบแรก

## Part B — รีวิวโค้ด
**Prompt:** รีวิวโค้ดนี้ในฐานะ senior developer: บอกจุดที่ควรปรับปรุง 3 ข้อ เรียงตามความสําคัญ พร้อมเหตุผลและโค้ดที่แก้แล้ว
**ผลลัพธ์ย่อ:** ได้คำแนะนำ 3 ข้อ ได้แก่ 1. การทำ Object Destructuring 2. สร้าง Constants สำหรับ Roles 3. การใส่ Error Handling กรณี Array ว่าง
**ตรวจแล้ว:** ใช้ได้
**รอบที่ iterate:** 1 — ผ่านตั้งแต่รอบแรก

## Part C — ดีบักด้วย AI
**Prompt:** 
- ผลลัพธ์ที่ได้จริง: ได้ array ว่าง [] และค่า total เป็น object ต่อกับตัวเลข
- โค้ด: onst buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];
 const lateRoutes = buses.filter(b => { b.late }).map(b => b.route);
const total = buses.reduce((sum, b) => sum + b.passengers);
 console.log("สายที่มาสาย:", lateRoutes);   // ควรได้ ["NGV-2", "NGV-3"]
console.log("ผู้โดยสารรวม:", total);      // ควรได้ 145
- สิ่งที่คาดหวัง: lateRoutes ควรได้ ["NGV-2", "NGV-3"] และ total ควรได้ 145
- สิ่งที่เดา: คิดว่าน่าจะผิดตรงวงเล็บปีกกาใน filter และ reduce อาจจะขาดค่าเริ่มต้น
- คำสั่ง: อธิบายสาเหตุก่อน แล้วค่อยให้โค้ดที่แก้ อย่าเปลี่ยนส่วนที่ไม่เกี่ยว
**ผลลัพธ์ย่อ:** AI อธิบายสาเหตุตรงตามที่เดาไว้ คือ arrow function ที่มีปีกกาต้องใส่ return และ reduce ควรใส่ 0 เป็นค่าเริ่มต้น พร้อมให้โค้ดที่แก้ไขแล้ว
**ตรวจแล้ว:** ใช้ได้ (ได้ผลลัพธ์ตรงตามที่คาดหวัง)
**รอบที่ iterate:** 1 — ผ่านตั้งแต่รอบแรก

## Part D — User Story (ถามคำถามก่อนเขียนโค้ด)
**Prompt:** User Story ของฉันคือ "ในฐานะคนทำงาน ฉันต้องการเลือกคลิปออกกำลังกายตามระดับพลังงานที่เหลือในแต่ละวันเพื่อให้สามารถออกกำลังกายได้สม่ำเสมอโดยไม่รู้สึกฝืนร่างกาย"
ก่อนเขียนโค้ด ถามฉัน 3 คำถามที่จำเป็นต่อการทำงานนี้ให้ถูกต้อง
**ผลลัพธ์ย่อ:** 
1.ระดับพลังงานจะใช้รูปแบบไหน (เช่น ตัวเลข 1-10 หรือ ข้อความ Low/Medium/High)?
2.ถ้าไม่มีคลิปที่ตรงกับระดับพลังงานเลย ต้องการให้คืนค่าอะไร (เช่น Array ว่าง หรือ ข้อความแจ้งเตือน)?
3.โครงสร้าง Object ของคลิปออกกำลังกายควรมี property อะไรบ้าง (เช่น ชื่อคลิป, ระยะเวลา, ระดับพลังงาน)?
**ตรวจแล้ว:** ใช้ได้
**รอบที่ iterate:** 1 — ผ่านตั้งแต่รอบแรก

## Part D — User Story (เขียนโค้ด)
**Prompt:** 
- บทบาท: คุณคือนักพัฒนา JavaScript อาวุโส
- งาน: เขียนฟังก์ชันสำหรับเลือกคลิปออกกำลังกายตามระดับพลังงาน
- บริบท: อ้างอิงจาก User Story: "ในฐานะคนทำงาน ฉันต้องการเลือกคลิปออกกำลังกายตามระดับพลังงานที่เหลือในแต่ละวันเพื่อให้สามารถออกกำลังกายได้สม่ำเสมอโดยไม่รู้สึกฝืนร่างกาย" โดยกำหนดให้ระดับพลังงานเป็นตัวเลข 1 (น้อย), 2 (ปานกลาง), 3 (มาก) ฟังก์ชันจะต้องคืนค่าคลิปที่ใช้พลังงานน้อยกว่าหรือเท่ากับพลังงานที่มี
- ข้อจำกัด: ขอเป็นฟังก์ชัน JavaScript ล้วน (ES6 Arrow Function) ที่ทำงานกับ array ของ object, ไม่ต้องมี UI และสร้างข้อมูลจำลอง (Mock Data) มา 5 คลิป
- รูปแบบ: ตอบเป็นโค้ดอย่างเดียว ตามด้วย console.log ทดสอบ 3 กรณี โดยต้องมีกรณีขอบ 1 กรณี
**ผลลัพธ์ย่อ:** ได้ฟังก์ชัน recommendWorkout ที่ใช้ method .filter() เพื่อกรองคลิปที่มีค่า requiredEnergy น้อยกว่าหรือเท่ากับพลังงานที่ระบุ พร้อมรับมือกรณีใส่ค่าที่ไม่ใช่ตัวเลข
**ตรวจแล้ว:** ใช้ได้
**รอบที่ iterate:** 1 — ผ่านตั้งแต่รอบแรก