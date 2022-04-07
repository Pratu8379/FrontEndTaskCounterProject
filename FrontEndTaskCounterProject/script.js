let dec = document.getElementById("dec");
let inc = document.getElementById("inc");
let count = document.getElementById("count");
let counterVal = document.getElementById("counterVal");
let loader = document.querySelector(".loader");
let loader_text = document.querySelector(".loader-text");
fetch(
  "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/pratiksha.json"
)
  .then((response) => response.json())
  .then((data) => {
    if (data === null) {
      count.value = 1;
    } else {
      console.log(data);
    }

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pratiksha: count.value }),
    };

    fetch(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        updateData();
      });
  });
function updateData() {
  inc.addEventListener("click", function () {
    count.value++;
    data = count.value;
    console.log(data);
    counterVal.innerHTML = data;
    loader.style.display = "block";
    loader.style.animation = "spin 2s linear infinite";
    loader_text.style.display = "block";
  });
  dec.addEventListener("click", function () {
    count.value--;
    data = count.value;
    console.log(data);
    counterVal.innerHTML = data;
    loader.style.display = "block";
    loader.style.animation = "spin 2s linear infinite";
    loader_text.style.display = "block";
  });
}
