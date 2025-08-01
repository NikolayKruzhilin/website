function sendMessage(message) {
  fetch('https://eoc63dzqz15zwlt.m.pipedream.net', {
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
