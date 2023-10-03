document.addEventListener("DOMContentLoaded", function () {
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeChatbotButton = document.getElementById("close-chatbot");
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");
    const chatContent = document.getElementById("chat-content");

    chatbotIcon.addEventListener("click", function () {
        chatbotContainer.style.display = "block";
        chatbotIcon.style.display = "none";
    });

    closeChatbotButton.addEventListener("click", function () {
        chatbotContainer.style.display = "none";
        chatbotIcon.style.display = "block";
    });

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            appendMessage("You", userMessage);
            userInput.value = "";
            // Simulate the chatbot's response (you can replace this with your own logic)
            setTimeout(function () {
                appendMessage("Chatbot", " " + userMessage);
            }, 1000);
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = "chat-message";
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContent.appendChild(messageElement);
    }
});
