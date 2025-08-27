// get The class name
const collections = document.getElementsByClassName("fa-heart");
// Access the existing heart value by id
let exitingHeartNum = parseInt(
  document.getElementById("existing_Hearts_num").innerText
);

let count = 0;
for (const collection of collections) {
  collection.addEventListener("click", function () {
    count++;
    // set the value
    document.getElementById("existing_Hearts_num").innerText = count;
  });
}
// coins and call section starts
const callsBtns = document.getElementsByClassName("call_btn");

for (const callBtn of callsBtns) {
  callBtn.addEventListener("click", function () {
    alert("what happenning");
  });
}
