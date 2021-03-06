const stepTop = document.querySelector(".featured_top_box");
const line = document.querySelectorAll(".featured_top_box .line");

function setLineWidth() {
  line.forEach((el) => {
    const width = parseInt(window.getComputedStyle(stepTop).width) - 70;
    const right = parseInt(width) / 2;
    el.style.width = `${width}px`;
    el.style.right = `${-right}px`;
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    setLineWidth();
  }
});

if (window.innerWidth > 768) {
  setLineWidth();
}

const readAns = document.querySelectorAll(".read_ans");
const faqBody = document.querySelectorAll(".faq-body");

readAns.forEach((el, index) => {
  el.addEventListener("click", () => {
    faqBody[index].classList.toggle("active");
    el.classList.toggle("faqBtnActive");
  });
});
