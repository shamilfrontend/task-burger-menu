const calculateBtn = document.querySelector('#calculate');
const menuItem = document.querySelectorAll('.menu-item');
const kiloCalorieEl = document.querySelector('#kilo-calorie-total');
const costEl = document.querySelector('#cost-total');

const calculate = () => {
  let totalKiloCalorie = 0;
  let totalCost = 0;

  for (let i = 0; i < menuItem.length; i++) {
    let currentItem = menuItem[i];

    if (Boolean(currentItem.checked)) {
      totalKiloCalorie += Number(currentItem.getAttribute('data-kkal'));
      totalCost += Number(currentItem.getAttribute('data-cost'));
    }
  }

  kiloCalorieEl.textContent = totalKiloCalorie;
  costEl.textContent = totalCost;
};

calculateBtn.addEventListener('click', calculate);

document.addEventListener('DOMContentLoaded', calculate);
