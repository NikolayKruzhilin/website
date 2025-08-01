function sendMessage(message) {
  fetch(`https://eoc63dzqz15zwlt.m.pipedream.net?message=${encodeURIComponent(message)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log('Reply from chatbot:', data);
    // Display this in your chatbot UI
  });
}
