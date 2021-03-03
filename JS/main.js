const currencyEL_one = document.getElementById('currency-one');
const amountEL_one = document.getElementById('amount-one');
const currencyEL_tow = document.getElementById('currency-tow');
const amountEL_tow = document.getElementById('amount-tow');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEL_one.value;
  const currency_tow = currencyEL_tow.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_tow];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_tow}`;
      amountEL_tow.value = (amountEL_one.value * rate).toFixed(2);

    })
};

// Evenet listners
currencyEL_one.addEventListener('change', calculate);
amountEL_one.addEventListener('input', calculate);
currencyEL_tow.addEventListener('change', calculate);
amountEL_tow.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  [currencyEL_one.value, currencyEL_tow.value] = [currencyEL_tow.value, currencyEL_one.value]; // swap currencies
  calculate();
})


calculate();