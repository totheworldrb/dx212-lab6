// ฟังก์ชันคำนวณค่าโดยสารรถ NGV
const calcFare = (distanceKm) => {
    // ถ้าระยะทางติดลบ หรือไม่ใช่ตัวเลข ให้คืนค่า 0
    if (typeof distanceKm !== 'number' || distanceKm <= 0) return 0;
    
    // 2 กิโลเมตรแรก 10 บาท
    if (distanceKm <= 2) return 10;
    
    // คำนวณระยะทางส่วนที่เกิน 2 กม. และปัดเศษขึ้น
    const extraDistance = Math.ceil(distanceKm - 2);
    
    // นำ 10 บาทแรก มาบวกกับระยะทางที่เกิน (กม. ละ 2 บาท)
    return 10 + (extraDistance * 2);
};

// ทดสอบ 3 กรณี ตามเงื่อนไข
console.log(calcFare(1.5)); // ควรได้ 10
console.log(calcFare(2));   // ควรได้ 10
console.log(calcFare(7.2)); // ควรได้ 22