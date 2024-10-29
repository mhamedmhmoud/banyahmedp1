// ������ ������ ������� (����)
const scheduleData = [
    { day: "�����", subject: "���������", time: "8:00 - 9:00" },
    { day: "�������", subject: "������", time: "9:00 - 10:00" },
    { day: "��������", subject: "�������", time: "10:00 - 11:00" }
];

// ������ �������� �������� (����)
const homeworkData = [
    { subject: "���������", assignment: "����� 3 ���� 20" },
    { subject: "������", assignment: "����� �� �������" }
];

// ��� ������ �������
function loadSchedule() {
    const scheduleTable = document.getElementById("scheduleTable");
    scheduleData.forEach(entry => {
        const div = document.createElement("div");
        div.textContent = `${entry.day}: ${entry.subject} - ${entry.time}`;
        scheduleTable.appendChild(div);
    });
}

// ��� �������� ��������
function loadHomework() {
    const homeworkList = document.getElementById("homeworkList");
    homeworkData.forEach(homework => {
        const div = document.createElement("div");
        div.textContent = `${homework.subject}: ${homework.assignment}`;
        homeworkList.appendChild(div);
    });
}

// ����� �������
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageBox = document.getElementById("messageBox");
    if (messageInput.value.trim() !== "") {
        const div = document.createElement("div");
        div.textContent = messageInput.value;
        messageBox.appendChild(div);
        messageInput.value = "";  // ����� ��� �������
    }
}

// ����� �������� ��� ��� ������
window.onload = function() {
    loadSchedule();
    loadHomework();
};
