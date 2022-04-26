const XLSX = require("xlsx");
const workbook = XLSX.readFile("data/customers.xlsx");

let worksheet = workbook.Sheets[workbook.SheetNames[0]];

for (let index = 2; index <= 4; index++) {
  const id = worksheet[`A${index}`].v;
  const name = worksheet[`B${index}`].v;

  console.log(id, name);
}
