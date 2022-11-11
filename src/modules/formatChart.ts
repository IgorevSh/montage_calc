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
  let resultVal = sum;
  for (let i = 0; i < months; i++) {
    let debtPay = resultVal * (percent / 1200);
    resultVal -= month - debtPay;
    let row = {
      monthYear: `${calendar[(data.getMonth() + i) % 12]} ${
        data.getFullYear() + Math.trunc(i / 12)
      }`,
      monthlyPay: Math.round(month),
      mainPay: Math.round(month - debtPay),
      debtPay: Math.round(debtPay),
      leastPay: Math.round(resultVal) > 0 ? Math.round(resultVal) : 0,
    };
    resultTable.push(row);
  }
  return { resultTable, headers };
}
