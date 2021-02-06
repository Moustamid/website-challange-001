//Select element function :
//- return wath ever 'element' i pass in ...
const selectElement = (element) => {
  return document.querySelector(element);
};

const menuToggler = selectElement(".menu-toggle");
const body = selectElement("body");

menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});
