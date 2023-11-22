function skillsMember() {
    var skill = document.getElementById("skills").value;
    var skillList = document.getElementById("skillList");
    var newSkill = document.createElement("li");
    var skillText = document.createTextNode(skill);
    newSkill.appendChild(skillText);
    skillList.appendChild(newSkill);
    document.getElementById("skills").value = "";
}