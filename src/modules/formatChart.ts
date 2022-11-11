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

  for (let i = 0; i <= months; i++) {
    let lastPay =
      (sum * (100 + percent)) / 100 - i * month > 0
        ? (sum * (100 + percent)) / 100 - i * month
        : 0;
    let debtPay = Math.ceil((percent / 1200) * lastPay);
    let row = {
      monthYear: `${calendar[(data.getMonth() + i) % 12]} ${
        data.getFullYear() + Math.trunc(i / 12)
      }`,
      monthlyPay: month,
      mainPay: month - debtPay,
      debtPay: debtPay,
      leastPay: lastPay,
    };
    resultTable.push(row);
  }
  return { resultTable, headers };
}
