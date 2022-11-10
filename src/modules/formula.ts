export default function formula(
  credit: number,
  firstPrice: number,
  percentage: number,
  payday: number
): number {
  return Math.ceil(
    ((credit - firstPrice) * (1 + percentage / 100)) / (payday * 12)
  );
}
