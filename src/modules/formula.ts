export default function formula(
  credit: number,
  firstPrice: number,
  percentage: number,
  payday: number
): number {
  let prctMonth = percentage / 1200;
  let persentStat =
    (credit - firstPrice) *
    (prctMonth / (1 - Math.pow(1 + prctMonth, -payday * 12)));
  return persentStat;
}
