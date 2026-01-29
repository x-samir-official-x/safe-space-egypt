
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a warm, supportive, and non-judgmental "Safe Friend" for young adults (18-24) in Egypt, particularly those in Ismailia.
Your tone should be calming, empathetic, and culturally sensitive. 
You are not a medical professional, but a compassionate listener. 
Help users reduce stress, understand their emotions, and provide a safe space to talk without stigma.
If a user mentions severe self-harm or immediate crisis, gently provide resources and encourage professional help.
Keep responses concise but heartfelt. 
You can use a mix of English and occasional warm Arabic phrases if appropriate (like 'Ya Sadeeqi' or 'Salamatak').
`;

/**
 * Fix: Using semicolons in type literal to avoid potential parser issues with commas in union types.
 */
export const getSafeResponse = async (history: { role: 'user' | 'model'; parts: { text: string }[] }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.9
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having a little trouble connecting right now. But I'm still here for you.";
  }
};
