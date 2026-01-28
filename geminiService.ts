import { GoogleGenAI } from "@google/genai";

// Use Vite's import.meta.env for environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const searchArticlesIntelligently = async (query: string, articles: any[]) => {
  if (!apiKey) return articles;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-lite-preview-02-05',
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Based on the user query "${query}", filter and rank these articles by relevance. Return a JSON array of their IDs only.
                    Articles: ${JSON.stringify(articles.map(a => ({ id: a.id, title: a.title, excerpt: a.excerpt })))}`
            }
          ]
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "ARRAY",
          items: { type: "STRING" }
        }
      }
    });

    const text = response.text;
    const relevantIds = JSON.parse(text || '[]');
    return articles.filter(a => relevantIds.includes(a.id));
  } catch (e) {
    console.error("Gemini search error", e);
    // Fallback to basic search if API fails
    throw e;
  }
};

export const generateSmartSummary = async (article: any) => {
  if (!apiKey) return "API Key missing.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-lite-preview-02-05',
      contents: [
        {
          role: "user",
          parts: [{ text: `Summarize this article in 3 short bullet points: Title: ${article.title}, Excerpt: ${article.excerpt}` }]
        }
      ],
    });
    return response.text;
  } catch (e) {
    console.error("Gemini summary error", e);
    return "Could not generate summary.";
  }
};
