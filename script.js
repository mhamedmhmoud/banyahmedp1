// »Ì«‰«  «·ÃœÊ· «·œ—«”Ì („À«·)
const scheduleData = [
    { day: "«·√Õœ", subject: "«·—Ì«÷Ì« ", time: "8:00 - 9:00" },
    { day: "«·≈À‰Ì‰", subject: "«·⁄·Ê„", time: "9:00 - 10:00" },
    { day: "«·À·«À«¡", subject: "«· «—ÌŒ", time: "10:00 - 11:00" }
];

// »Ì«‰«  «·Ê«Ã»«  «·„‰“·Ì… („À«·)
const homeworkData = [
    { subject: "«·—Ì«÷Ì« ", assignment: " „—Ì‰ 3 ’›Õ… 20" },
    { subject: "«·⁄·Ê„", assignment: " ﬁ—Ì— ⁄‰ «·ﬂÊ«ﬂ»" }
];

// ⁄—÷ «·ÃœÊ· «·œ—«”Ì
function loadSchedule() {
    const scheduleTable = document.getElementById("scheduleTable");
    scheduleData.forEach(entry => {
        const div = document.createElement("div");
        div.textContent = `${entry.day}: ${entry.subject} - ${entry.time}`;
        scheduleTable.appendChild(div);
    });
}

// ⁄—÷ «·Ê«Ã»«  «·„‰“·Ì…
function loadHomework() {
    const homeworkList = document.getElementById("homeworkList");
    homeworkData.forEach(homework => {
        const div = document.createElement("div");
        div.textContent = `${homework.subject}: ${homework.assignment}`;
        homeworkList.appendChild(div);
    });
}

// ≈—”«· «·—”«∆·
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageBox = document.getElementById("messageBox");
    if (messageInput.value.trim() !== "") {
        const div = document.createElement("div");
        div.textContent = messageInput.value;
        messageBox.appendChild(div);
        messageInput.value = "";  // ≈›—«€ Õﬁ· «·≈œŒ«·
    }
}

//  Õ„Ì· «·»Ì«‰«  ⁄‰œ › Õ «·’›Õ…
window.onload = function() {
    loadSchedule();
    loadHomework();
};
