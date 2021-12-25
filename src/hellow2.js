import Key from "../assets/key.jpg";

function hellow() {
  console.log("hellow");
}

function addImage() {
  const image = document.createElement("img");
  image.src = Key;
  document.body.appendChild(image);
}

export default { hellow, addImage };
