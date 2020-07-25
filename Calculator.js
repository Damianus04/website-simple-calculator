// GET AND PRINT RECORD
function getRecord() {
  return document.getElementById("record-value").innerText;
}

function printRecord(x) {
  document.getElementById("record-value").innerText = x;
}

// GET AND PRINT OUTPUT
function getOutput() {
  return document.getElementById("output-value").innerText;
}
// with comma rules
function printOutput(x) {
  if (x == "") {
    document.getElementById("output-value").innerText = x;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(x);
  }
}
function getFormattedNumber(x) {
  if (x == "-") {
    return "";
  }
  var n = Number(x);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(x) {
  return Number(x.replace(/,/g, ""));
}

// EVENT LISTENER
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function() {
    // alert("operator clicked:" + this.id);
    if (this.id == "clear") {
      printRecord("");
      printOutput("");
    } else {
      var output = getOutput();
      var record = getRecord();
      if (output != "" || record != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        record = record + output;
        if (this.id == "=") {
          var result = eval(record);
          printOutput(result);
          printRecord("");
        } else {
          record = record + this.id;
          printRecord(record);
          printOutput("");
        }
      }
    }
  });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function() {
    // alert("number clicked:" + this.id);
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      //if output is a number
      output = output + this.id;
      printOutput(output);
    }
  });
}
