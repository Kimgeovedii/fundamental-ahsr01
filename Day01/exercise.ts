// Write a code to find area of rectangle.
// Example: length = 5, width = 3, Output: 15
function calculateRectangleArea(length: number, width: number): number {
  return length * width;
}
console.log(`Rectangle Area: ${calculateRectangleArea(5, 3)}`);

// Write a code to find perimeter of rectangle.
// Example: length = 5, width = 3, Output: 16
function calculateRectanglePerimeter(length: number, width: number): number {
  return 2 * (length + width);
}
console.log(`Rectangle Perimeter: ${calculateRectanglePerimeter(5, 3)}`);

// Write a code to find diameter, circumference and area of a circle.
// Example: radius = 5, Output: diameter = 10, circumference = 31.4159, area = 78.539
function calculateCircleProperties(radius: number): void {
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * Math.pow(radius, 2);

  console.log(
    `Diameter: ${diameter}, Circumference: ${circumference.toFixed(
      4
    )}, Area: ${area.toFixed(4)}`
  );
}
calculateCircleProperties(5);

// Write a code to find angles of triangle if two angles are given.
// Example: a = 80, b = 65, Output: 35
function calculateThirdTriangleAngle(angleA: number, angleB: number): number {
  const totalAngle = 180;
  return totalAngle - angleA - angleB;
}
console.log(`Third Triangle Angle: ${calculateThirdTriangleAngle(80, 65)}`);

// Write a code to convert days to years, months and days.
// Notes: 1 year : 365 days, 1 month : 30 days
// Example: 400 days → 1 year, 1 month, 5 days
// Example: 366 days → 1 year, 0 month, 1 day
function convertDaysToYMD(totalDays: number): string {
  const years = Math.floor(totalDays / 365);
  let remainingDays = totalDays % 365;
  const months = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;

  return `${years} years, ${months} months, ${days} days`;
}
console.log(`400 days -> ${convertDaysToYMD(400)}`);
console.log(`366 days -> ${convertDaysToYMD(366)}`);

// Write a code to get difference between dates in days.
// Example: date1 = 2022-01-20, date2 = 2022-01-22, Output: 2
function getDaysDifference(date1Str: string, date2Str: string): number {
  const date1 = new Date(date1Str);
  const date2 = new Date(date2Str);

  const diffMs = date2.getTime() - date1.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  return diffDays;
}
const resultDiff = getDaysDifference("2022-01-20", "2022-01-22");
console.log(`Day Difference: ${resultDiff}`);
