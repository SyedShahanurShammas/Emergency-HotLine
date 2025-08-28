function getTextById(id) {
  return (texts = document.getElementById(id).innerText);
}
// calls buttons functionality
function callBtnFunctionality(num, subTitle, title) {
  const num1 = getTextById(num);
  const subTitle1 = getTextById(subTitle);
  const title1 = getTextById(title);
  coins = coins - 20;
  if (coins < 0) {
    alert(
      "You Don't Have sufficient Coins to call.You need At least 20 coins to call"
    );
    return;
  }
  // time
  let now = new Date();
  let time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const div = document.createElement("div");
  const container = document.getElementById("container-history");
  div.innerHTML = `
      <div
            class="min-h-5 my-3 p-2 flex justify-between items-center bg-[#FAFAFA] rounded-lg"
            >
            <div class="">
              <h1 class="text-[18px] font-bold">${title1}</h1>
              <h1 class="text-[#5C5C5C] font-normal text-[18px]">${num1}</h1>
            </div>
            <p class="w-[95px]">${time}</p>
          </div>
  `;
  container.appendChild(div);
  // show alert
  alert(`Calling ${subTitle1} ${num1}...`);
  document.getElementById("coins-number").innerText = coins;
}
