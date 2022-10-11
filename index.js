
function generateVkn() {
  var random;

  while (random?.length !== 9) {
    random = Math.round(Math.random() * 1000 * 1000 * 1000).toString();
  }

  var total = 0;
  for (var index = 0; index < 9; index++) {
    var orderNumber = (index + 1);
    var result = (parseInt(random[index]) + 10 - orderNumber) % 10;

    if (result === 9) {
      total += result;
    } else {
      //(result * 2^(10-orderNumber)) % 9
      total += (result * Math.pow(2, (10 - orderNumber))) % 9;
    }
  }

  var digit10 = (10 - (total % 10)) % 10;

  return random + digit10;
}

function generateTckn() {
  var random;

  while (random?.length !== 9) {
    random = Math.round(Math.random() * 1000 * 1000 * 1000).toString();
  }

  var digitTotal13579 = 0;
  var digitTotal2468 = 0;
  for (var index = 0; index < 9; index++) {
    if (index % 2 === 0) {
      digitTotal13579 += parseInt(random[index]);
    } else {
      digitTotal2468 += parseInt(random[index]);
    }

  }

  var digit10 = ((digitTotal13579 * 7) - digitTotal2468) % 10;
  var digit11 = (digitTotal13579 + digitTotal2468 + digit10) % 10;

  return random + digit10 + digit11;
}

function validateVkn(value) {
  var regex = /^[0-9]{10}$/;
  if (!regex.test(value)) {
    return false;
  }

  var total = 0;
  for (var index = 0; index < 9; index++) {
    var orderNumber = (index + 1);
    var result = (parseInt(value[index]) + 10 - orderNumber) % 10;

    if (result === 9) {
      total += result;
    } else {
      //(result * 2^(10-orderNumber)) % 9
      total += (result * Math.pow(2, (10 - orderNumber))) % 9;
    }
  }

  var digit10 = (10 - (total % 10)) % 10;

  return digit10 === parseInt(value[9]);
}

function validateTckn(value) {
  var regex = /^[1-9]{1}[0-9]{9}[02468]{1}$/;
  if (!regex.test(value)) {
    return false;
  }

  var digitTotal13579 = 0;
  var digitTotal2468 = 0;
  for (let index = 0; index < 9; index++) {
    if (index % 2 === 0) {
      digitTotal13579 += parseInt(value[index]);
    } else {
      digitTotal2468 += parseInt(value[index]);
    }
  }

  var digit10 = ((digitTotal13579 * 7) - digitTotal2468) % 10;
  if (digit10 !== parseInt(value[9])) {
    return false;
  }

  var digit11 = (digitTotal13579 + digitTotal2468 + digit10) % 10;

  return digit11 === parseInt(value[10]);
}

function onClickGenerateVkn() {
  document.getElementById("generatedVknInput").value = generateVkn();
}

function onClickGenerateTckn() {
  document.getElementById("generatedTcknInput").value = generateTckn();
}

function copyToClipBoard(e) {
  var value = document.getElementById(e.target.dataset.copyTarget).value;
  navigator.clipboard.writeText(value);

  var popover = bootstrap.Popover.getInstance(e.target);
  e.target.dataset.bsContent = "Copied: " + value;
  popover.dispose();
  popover = bootstrap.Popover.getOrCreateInstance(e.target);
  popover.show();

  e.target.addEventListener("mouseout", function () {
    e.target.dataset.bsContent = "Copy to clipboard";
    popover.dispose();
    bootstrap.Popover.getOrCreateInstance(e.target);
  }, { once: true });
}

function onInputValidateVkn() {
  var element = document.getElementById("validateVknInput");

  element.classList.remove("is-valid", "is-invalid");
  if (!element.value) {
    return;
  }

  var isValid = validateVkn(element.value);
  element.classList.add(isValid ? "is-valid" : "is-invalid");
}

function onInputValidateTckn() {
  var element = document.getElementById("validateTcknInput");

  element.classList.remove("is-valid", "is-invalid");
  if (!element.value) {
    return;
  }

  var isValid = validateTckn(element.value);
  element.classList.add(isValid ? "is-valid" : "is-invalid");
}

function init() {
  document.getElementById("generateVknButton").addEventListener("click", onClickGenerateVkn);
  document.getElementById("generateTcknButton").addEventListener("click", onClickGenerateTckn);

  document.getElementById("validateVknInput").addEventListener("input", onInputValidateVkn);
  document.getElementById("validateTcknInput").addEventListener("input", onInputValidateTckn);

  document.querySelectorAll(".btn-copy").forEach(function (element) {
    element.addEventListener("click", copyToClipBoard);
    new bootstrap.Popover(element);
  });

  onClickGenerateVkn();
  onClickGenerateTckn();
}

document.addEventListener("DOMContentLoaded", init);