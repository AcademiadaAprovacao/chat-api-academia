
async function sendMessage() {
  const userInput = document.getElementById("userInput").value;

  const response = await fetch("https://chat-api-academia.vercel.app/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: userInput
    })
  });

  const data = await response.json();
  document.getElementById("responseBox").textContent = data.result;
}
