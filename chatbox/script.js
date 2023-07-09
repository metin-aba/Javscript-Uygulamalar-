const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "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";
const createChatLi = (message, className) => {
  const chatli = document.createElement("li");
  chatli.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span  class="fas fa-robot"></span><p>${message}</p>`;
  chatli.innerHTML = chatContent;
  return chatli;
};

const generateResponse = (incomingChatLi) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
const messageElement = incomingChatLi.querySelector("p");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: userMessage } ]
    })
  }
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
     messageElement.textContent = data.choices[0].message.content;
    })
    .catch(() => {
        messageElement.textContent ="Oops something went wrong. Please try again!";
    });
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinging....", "incoming");
    chatbox.appendChild(incomingChatLi);
    generateResponse(incomingChatLi);
  }, 600);
 
};
sendChatBtn.addEventListener("click", handleChat);
