// const ShowError = () => {};

const inputss = document.querySelectorAll("form input");

inputss.forEach((input) => {
  input.addEventListener("input", (event) => {
    if (!input.validity.valid) {
      // console.log(input.type);
      if (input.type !== "checkbox") {
        if (input.validity.valueMissing) {
          console.log(`${input.id} can not be empty`);
        }
      }
      if (input.validity.tooShort) {
        input.setCustomValidity(`${input.id} is too short`);
      }
      if (input.id === "title") {
        console.log("this is the title field");
      }
    }
  });
});
