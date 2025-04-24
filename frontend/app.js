async function shortenUrl() {
    const originalUrl = document.getElementById("originalUrl").value;
    const resultElement = document.getElementById("result");
  
    try {
      const response = await fetch("http://172.31.158.247:5000/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ originalUrl })
      });
  
      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }
  
      const data = await response.json();
      resultElement.innerHTML = `Shortened URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
    } catch (error) {
      resultElement.textContent = error.message;
    }
  }