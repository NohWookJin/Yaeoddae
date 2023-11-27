/** 3자리 마다 쉼표를 삽입하여 string으로 return */
export function addCommasToNumber(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}