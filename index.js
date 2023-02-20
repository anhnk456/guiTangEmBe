const textarea = document.querySelector(".textarea");

textarea.addEventListener("click", (event) => {
  event.preventDefault();
});

function readTextFile() {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", "./txt/embe.txt", true);
  rawFile.onreadystatechange = async function () {
    if (rawFile.readyState === 4) {
      var allText = rawFile.responseText;
      const lines = allText.split("\n");
      const data = [];
      for (let line of lines) {
        data.push(line);
        await sleep(50);
        document.querySelector(".textarea").innerHTML = data;
      }
    }
  };
  rawFile.send();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

readTextFile();
