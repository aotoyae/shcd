var memberArray = ["hana", "duna", "sena"];
console.log("mmemberArray[2]", memberArray[2]);

var memberObject = {
  manager: "hana",
  developer: "duna",
  designer: "sena",
};
memberObject.designer = "sana";
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject["designer"]);
delete memberObject.manager;
console.log("after delete memberObject.manager", memberObject.manager);
