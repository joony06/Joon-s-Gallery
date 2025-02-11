/**
const imgCount = document.querySelectorAll('.img').length;

for(let i = 0; i < imgCount; i++) {
	window['modal' + i] = document.querySelector(".modal")[i];
	window['modal_img' + i] = document.querySelector(".modal_content")[i];
	window['img' + i] = document.querySelectorAll('.img')[i];
	
	$('img' ).addEventListener('click', ()=>{
		modalDisplay("block");
		modal_img[i].src = img[i].src;
	  });
	  modal[i].addEventListener('click', ()=>{
		modalDisplay("none");
	  });

       const modal01 = document.querySelectorAll(".modal")[0]
      const modal02 = document.querySelectorAll(".modal")[1]
      
      const modal_img01 = document.querySelectorAll(".modal_content")[0];
      const modal_img02 = document.querySelectorAll(".modal_content")[1];
      
      const img01 = document.querySelectorAll('.img')[0];
      const img02 = document.querySelectorAll('.img')[1];
} */

const imgCount = document.querySelectorAll(".img").length;
for (let i = 0; i < imgCount; i++) {
  window["modal" + i] = document.querySelectorAll(".modal")[i];
  window["modal_img" + i] = document.querySelectorAll(".modal_content")[i];
  window["img" + i] = document.querySelectorAll(".img")[i];
}

function modalDisplay01(text) {
  modal0.style.display = text;
}
function modalDisplay02(text) {
  modal1.style.display = text;
}
function modalDisplay03(text) {
  modal2.style.display = text;
}
function modalDisplay04(text) {
  modal3.style.display = text;
}
function modalDisplay05(text) {
  modal4.style.display = text;
}
function modalDisplay06(text) {
  modal5.style.display = text;
}

img0.addEventListener("click", () => {
  modalDisplay01("block");
  modal_img0.src = img0.src;
});
modal0.addEventListener("click", () => {
  modalDisplay01("none");
});

img1.addEventListener("click", () => {
  modalDisplay02("block");
  modal_img1.src = img1.src;
});
modal1.addEventListener("click", () => {
  modalDisplay02("none");
});

img2.addEventListener("click", () => {
  modalDisplay03("block");
  modal_img2.src = img2.src;
});
modal2.addEventListener("click", () => {
  modalDisplay03("none");
});

img3.addEventListener("click", () => {
  modalDisplay04("block");
  modal_img3.src = img3.src;
});
modal3.addEventListener("click", () => {
  modalDisplay04("none");
});

img4.addEventListener("click", () => {
  modalDisplay05("block");
  modal_img4.src = img4.src;
});
modal4.addEventListener("click", () => {
  modalDisplay05("none");
});

img5.addEventListener("click", () => {
  modalDisplay06("block");
  modal_img5.src = img5.src;
});
modal5.addEventListener("click", () => {
  modalDisplay06("none");
});

const span = document.querySelector(".imageClose");
span.addEventListener("click", () => {
  modalDisplay("none");
});
