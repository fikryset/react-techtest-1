const inputStrings = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
var inputSortedString = [];
var inputStringsCopy = [];
var answer = [];
var tempAnswer = [];

function Answer(input) {
  let tempString = "";
  for (let i = 0; i < input.length; i += 1) {
    tempString = WordSorter(input[i].split(""));
    inputSortedString.push(tempString.join(""));
  }
  inputStringsCopy = input.slice(0);
  let j = inputSortedString.length;
  let u = 0;
  let k = 1;
  while (j > 0) {
    u = 0;
    k = 1;
    tempAnswer.push(inputStringsCopy[u]);
    while (k < j) {
      if (StringCompare(inputSortedString[u], inputSortedString[k])) {
        tempAnswer.push(inputStringsCopy[k]);
        inputSortedString.splice(k, 1);
        inputStringsCopy.splice(k, 1);
      } else {
        k += 1;
      }
    }
    answer.push(tempAnswer);
    tempAnswer = [];
    inputSortedString.splice(u, 1);
    inputStringsCopy.splice(u, 1);
    j = inputSortedString.length;
  }
  return answer;
}

function WordSorter(stringInArray) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < stringInArray.length; i += 1) {
      if (stringInArray[i - 1] > stringInArray[i]) {
        done = false;
        var tmp = stringInArray[i - 1];
        stringInArray[i - 1] = stringInArray[i];
        stringInArray[i] = tmp;
      }
    }
  }

  return stringInArray;
}

function StringCompare(string1, string2) {
  if (string1 === string2) {
    return true;
  } else false;
}

var answer = Answer(inputStrings);
document.getElementById("App").innerHTML = JSON.stringify(answer, null, " ");
