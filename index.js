function createCounter(value, maxValue, minValue) {
  const temp = {
    increment: function () {
      if (this.count == this.max - 1) {
        this.count = this.count + 1;
        plusButton.setAttribute("disabled", "true");
        output.innerHTML = `count : ${this.count}`;
      } else {
        this.count = this.count + 1;
        output.innerHTML = `count : ${this.count}`;
      }
      if (this.count >= this.min) {
        minusButton.removeAttribute("disabled");
      }
    },
    decrement: function () {
      if (this.count == this.min + 1) {
        this.count = this.count - 1;
        output.innerHTML = `count : ${this.count}`;
        minusButton.setAttribute("disabled", "true");
      } else {
        this.count = this.count - 1;
        output.innerHTML = `count : ${this.count}`;
      }
      if (this.count <= this.max) {
        plusButton.removeAttribute("disabled");
      }
    },
    min: minValue || -1000,
    max: maxValue || 1000,
    count: value || 0,
  };

  const counter = document.createElement("div");
  const plusButton = document.createElement("input");
  const minusButton = document.createElement("input");
  const output = document.createElement("a");

  minusButton.setAttribute("value", "-");
  plusButton.setAttribute("value", "+");
  minusButton.setAttribute("type", "button");
  plusButton.setAttribute("type", "button");

  output.innerText = `count: ${temp.count}`;
  counter.append(minusButton);
  counter.append(plusButton);
  counter.append(output);
  container.append(counter);

  minusButton.addEventListener("click", () => {
    temp.decrement();
  });
  plusButton.addEventListener("click", () => {
    temp.increment();
  });
  return temp;
}
const counter_1 = createCounter(15, 20, -20);
const counter_2 = createCounter(-6);
const counter_3 = createCounter(10);

console.log(counter_1.count);
console.log(counter_2.count);
console.log(counter_3.count);

counter_1.decrement();
console.log(counter_1.count);
counter_3.increment();
console.log(counter_3.count);
