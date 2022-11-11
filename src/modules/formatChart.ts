export default function formatChart(
  years: number,
  percent: number,
  sum: number,
  month: number
): any {
  let headers = [
    { text: "Месяц, год", value: "monthYear" },
    { text: "Сумма платежа", value: "monthlyPay" },
    { text: "Погашение процентов", value: "debtPay" },
    { text: "Погашение основного долга", value: "mainPay" },
    { text: "Остаток долга", value: "leastPay" },
  ];
  let calendar = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сенябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  let data: Date = new Date();
  let resultTable = [];
  let months: number = years * 12;
  for (let i = 0; i < months; i++) {
    let clearDebt = findClearDebt(i, percent, month, sum);
    let debtPay = clearDebt * (percent / 1200);
    let row = {
      monthYear: `${calendar[(data.getMonth() + i) % 12]} ${
        data.getFullYear() + Math.trunc(i / 12)
      }`,
      monthlyPay: Math.round(month),
      mainPay: Math.round(month - debtPay),
      debtPay: Math.round(debtPay),
      leastPay: Math.round(clearDebt - (month - debtPay)),
    };
    resultTable.push(row);
  }
  return { resultTable, headers };
}
function findClearDebt(
  iter: number,
  percent: number,
  month: number,
  sum: number
): number {
  let resultVal = sum;
  for (let i = 0; i < iter; i++) {
    let clearPay = resultVal * (percent / 1200);
    resultVal -= month - clearPay;
  }
  return resultVal;
}
