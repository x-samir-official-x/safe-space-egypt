
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a warm, supportive, and non-judgmental "Safe Friend" for young adults (18-24) in Egypt, particularly those in Ismailia.
Your tone should be calming, empathetic, and culturally sensitive. 
You are not a medical professional, but a compassionate listener. 
Help users reduce stress, understand their emotions, and provide a safe space to talk without stigma.
If a user mentions severe self-harm or immediate crisis, gently provide resources and encourage professional help.
Keep responses concise but heartfelt. 
You can use a mix of English and occasional warm Arabic phrases if appropriate (like 'Ya Sadeeqi' or 'Salamatak').
Always ensure you are supportive and never dismissive of their feelings.
`;

/**
 * Sends chat history to Gemini and returns a compassionate response.
 */
export const getSafeResponse = async (history: { role: 'user' | 'model'; parts: { text: string }[] }[]) => {
  try {
    // التحقق من وجود مفتاح API
    if (!process.env.API_KEY) {
      throw new Error("API Key is missing");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // التأكد من أن التاريخ يبدأ بـ user (شرط أساسي لـ Gemini)
    const sanitizedHistory = [...history];
    while (sanitizedHistory.length > 0 && sanitizedHistory[0].role !== 'user') {
      sanitizedHistory.shift();
    }

    if (sanitizedHistory.length === 0) {
      return "I'm listening. What's on your mind?";
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: sanitizedHistory,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
        topK: 40
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from model");
    }

    return text;
  } catch (error) {
    console.error("Gemini API detailed error:", error);
    // العودة برسالة خطأ ودودة
    return null; 
  }
};
