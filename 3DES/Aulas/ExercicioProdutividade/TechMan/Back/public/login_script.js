function addChar(char) {
  var passwordInput = document.getElementById("senha");
  passwordInput.value += char;
}

function clearInput() {
  var passwordInput = document.getElementById("senha");
  passwordInput.value = "";
}

function submitForm() {
  var passwordInput = document.getElementById("senha");
  if (passwordInput.value.length == 0) {
    return;
  }
  var form = document.getElementsByClassName("form")[0];
  form.submit();
}