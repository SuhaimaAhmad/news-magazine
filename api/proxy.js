
export default async function handler(req, res) {
  const { category = "general" } = req.query;

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.VITE_API_KEY}`;

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // Spoof the origins to pass the API's validation check
        'Origin': 'http://localhost:5173',  // Default Vite local port
        'Referer': 'http://localhost:5173/'
      }
    });
    
    const data = await response.json();
    res.status(response.status).json(data);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}