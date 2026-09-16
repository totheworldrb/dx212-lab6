// ฟังก์ชันสำหรับแนะนำคลิปออกกำลังกายตามระดับพลังงาน (1 = น้อย, 2 = ปานกลาง, 3 = มาก)
const recommendWorkout = (videos, energyLevel) => {
    // ดักจับกรณีขอบเขต (Edge Case): ข้อมูลไม่ใช่ Array, ระดับพลังงานไม่ใช่ตัวเลข หรืออยู่นอกช่วง 1-3
    if (!Array.isArray(videos) || typeof energyLevel !== 'number' || energyLevel < 1 || energyLevel > 3) {
        return []; // คืนค่าเป็น Array ว่าง
    }
    
    // คืนค่าคลิปที่ระดับพลังงานที่ต้องใช้ น้อยกว่าหรือเท่ากับ พลังงานที่มี
    return videos.filter(video => video.requiredEnergy <= energyLevel);
};

// ตัวอย่างข้อมูลจำลองคลิปออกกำลังกาย (Mock Data)
const workoutVideos = [
    { id: 1, title: "ยืดเหยียดกล้ามเนื้อก่อนนอน (15 นาที)", requiredEnergy: 1 },
    { id: 2, title: "โยคะผ่อนคลายความเครียด (20 นาที)", requiredEnergy: 1 },
    { id: 3, title: "บอดี้เวทเบาๆ กระชับสัดส่วน (30 นาที)", requiredEnergy: 2 },
    { id: 4, title: "คาร์ดิโอเรียกเหงื่อ (30 นาที)", requiredEnergy: 2 },
    { id: 5, title: "HIIT เผาผลาญไขมันขั้นสุด (45 นาที)", requiredEnergy: 3 }
];

// ทดสอบ 3 กรณี
console.log("--- กรณีที่ 1: พลังงานน้อย (Energy = 1) ---");
console.log(recommendWorkout(workoutVideos, 1)); 
// คาดหวัง: ได้คลิปยืดเหยียด และ โยคะ (id 1, 2)

console.log("--- กรณีที่ 2: พลังงานมาก (Energy = 3) ---");
console.log(recommendWorkout(workoutVideos, 3)); 
// คาดหวัง: ได้ครบทุกคลิป เพราะพลังงานพอสำหรับทุกระดับ

console.log("--- กรณีที่ 3: กรณีขอบเขต (ระบุพลังงานผิดประเภท เช่น ข้อความ) ---");
console.log(recommendWorkout(workoutVideos, "เหนื่อยมาก")); 
// คาดหวัง: ได้ Array ว่าง []