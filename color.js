var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  },
};
var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgoundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
function nightDayHandler(self) {
  const target = document.querySelector("body");
  if (self.value === "night") {
    Body.setBackgoundColor("black");
    Body.setColor("white");
    self.value = "day";

    Links.setColor("yellow");
  } else {
    Body.setBackgoundColor("white");
    Body.setColor("black");
    self.value = "night";

    Links.setColor("blue");
  }
}
