/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

// const tipCalculator = (sum, percentage) => {
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;
//   console.log(`
//       Sum before tip: ${sum}
//       Tip percentage: ${percentage}%
//       Tip:            ${tip.toFixed(2)}
//       Total:          ${total.toFixed(2)}
//     `);
// };

// tipCalculator(49.65, 12);

/*
const tipCalculator = (sum, percent, symbol, prefix) => {
  let tip = sum * (percent / 100);
  let total = tip + sum;

  if (prefix === "before") {
    console.log(`Original Amount: ${symbol}${sum},
  Tip % : ${percent},
  Tip: ${symbol}${tip.toFixed(1)},
  Total: ${symbol}${total}.`);
  } else {
    console.log(`
  Original Amount: ${sum}${symbol},
  Tip % : ${percent},
  Tip: ${tip.toFixed(1)}${symbol},
  Total: ${total}${symbol}.
  `);
  }
};

// tipCalculator(
//   +prompt("Whats your total Bill?", "Amount"),
//   +prompt("How much do you want to tip?", "Amount"),
//   prompt("Enter Currency", "Currency"),
//   prompt("Symbol comes Before or After", "Currency")
// );
*/

const formatter = (locale, currency, value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formattedValue;
};

const tipCalc = (sum, tipRatio, locale, currency) => {
  const tip = sum * (tipRatio / 100);
  let total = tip + sum;
  console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${tipRatio}%
      Tip:            ${formatter(locale, currency, tip.toFixed(2))}
      Total:          ${formatter(locale, currency, total.toFixed(2))}
    `);
};

tipCalc(100, 20, "en-US", "USD");
