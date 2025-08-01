function sendMessage(message) {
  fetch('https://11dded891c17.ngrok-free.app/webhook/portfolio-chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true'
    },
    body: JSON.stringify({ message })
  })
  .then(res => res.json())
  .then(data => {
    console.log('Reply from n8n:', data);
    // You can display this in your chatbot UI
  });
}
