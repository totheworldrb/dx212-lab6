// คำนวณค่าโดยสารรถ NGV
const calcFare = (distanceKm) => {
  // ถ้าระยะทางติดลบ หรือไม่ใช่ตัวเลข ให้คืนค่า 0
  if (typeof distanceKm !== 'number' || distanceKm <= 0) return 0;

  // 2 กม. แรกคิด 10 บาท
  if (distanceKm <= 2) return 10;

  // ส่วนเกิน 2 กม. คิด กม. ละ 2 บาท และปัดเศษขึ้น
  const extraDistance = Math.ceil(distanceKm - 2);
  return 10 + extraDistance * 2;
};

console.log(calcFare(1.5));
console.log(calcFare(2));
console.log(calcFare(7.2));

// ฟังก์ชันคำนวณค่าโดยสารรถ NGV
const calcFare = (distanceKm) => {
  if (typeof distanceKm !== 'number' || distanceKm <= 0) return 0;
  if (distanceKm <= 2) return 10;

  const extraDistance = Math.ceil(distanceKm - 2);
  return 10 + extraDistance * 2;
};

// โค้ดทดสอบ function
const testCases = [
  { distance: 1.5, expected: 10 },
  { distance: 2, expected: 10 },
  { distance: 7.2, expected: 22 }
];

testCases.forEach(({ distance, expected }) => {
  const result = calcFare(distance);
  console.log(`distance: ${distance} => result: ${result}, expected: ${expected}`);

  if (result === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
});