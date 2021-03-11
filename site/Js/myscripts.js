
function validateForm() {
  var fn = document.forms["infoForm"]["fname"].value;
  var ln = document.forms["infoForm"]["lname"].value;
  var cpf = document.forms["infoForm"]["cpf"].value;
  var cn = document.forms["infoForm"]["credit"].value;
  var ad = document.forms["infoForm"]["adress"].value;
  if (fn == "" || ln == "") {
    alert("Full name must be filled out");
    return false;
  } else if (cpf == "" || cpf.toString().length != 11) {
    alert("Cpf must be filled/unvalid cpf format");
    return false;
  } else if (cn == "" || cn.toString().length != 16) {
    alert("credit number must be filled/unvalid card format");
    return false;
  } else if (ad == "") {
    alert("adrres must be filled")
    return false;
  }
}

/* NOT WORKING 
function validateSelectionForm(imgs) {
  var imgA = document.getElementById("expendedImg");
  var imB = URL("https://images.pexels.com/photos/1098662/pexels-photo-1098662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")

  imgA.src = imgs.src;
  if (imgA == imB) {
    alert("out of stock");
    return false;
  }

}
*/


function imgGallery(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");

  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}  