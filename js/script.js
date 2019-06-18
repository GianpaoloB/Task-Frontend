$("#error").hide();
$("form").on("submit", function(e) {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  const nameReg = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i;
  const numberReg = /^[0-9]+$/;
  const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  let name = $("#name").val();
  let email = $("#email").val();
  let phone = $("#phone").val();
  let message = $("#message").val();

  var inputVal = new Array(name, email, phone, message);

  var inputMessage = new Array(
    "Name",
    "Email adresse",
    "Telefonnummer",
    "Nachricht"
  );
  $("#error").hide();

  if (inputVal[0] == "") {
    $("#error").show();
    $("#error").html("Bitte " + inputMessage[0] + "hinzufügen");
    $("#name").focus();
  } else if (!nameReg.test(name)) {
    $("#error").show();
    $("#error").html("Name darf nur Buchstabe enthalten");
    $("#name").focus();
  } else if (inputVal[1] == "") {
    $("#error").show();
    $("#error").html("Bitte " + inputMessage[1] + "hinzufügen");
    $("#email").focus();
  } else if (!emailReg.test(email)) {
    $("#error").show();
    $("#error").html("Bitte, ein gültiges Email adresse eingeben");
    $("#email").focus();
  } else if (inputVal[2] == "") {
    $("#error").show();
    $("#error").html("Bitte " + inputMessage[2] + "hinzufügen");
    $("#phone").focus();
  } else if (!numberReg.test(phone)) {
    $("#error").show();
    $("#error").html("Der Telefonnummer darf nur nummer enthalten");
    $("#phone").focus();
  } else if (inputVal[3] == "") {
    $("#error").show();
    $("#error").html("Bitte " + inputMessage[3] + "hinzufügen");
    $("#message").focus();
  } else if (inputVal[3].length > 500) {
    $("#error").show();
    $("#error").html(inputMessage[3] + "darf maximal 500 Zeichen sein");
    $("#message").focus();
  }
}
