export async function askGemini(message: string): Promise<string> {
  // In production, use environment variable injected at build time,
  // or better: call your n8n backend proxy to keep the key secret.
  const apiKey = (window as any).__GEMINI_API_KEY__ || '';

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { parts: [{ text: message }] }
          ]
        })
      }
    );

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
  } catch (error) {
    return 'Gemini API failed';
  }
             }
