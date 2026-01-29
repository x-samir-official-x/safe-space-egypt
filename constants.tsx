
import React from 'react';

/**
 * لوحة تحكم الهوية البصرية والنصوص (Branding Control Center)
 */

export const BRANDING = {
  name: {
    first: "Safe",
    second: "Space",
    full: "Safe Space"
  },
  tagline: "Your Place To Heal",
  description: "The first digital sanctuary in Egypt dedicated to providing young adults with stigma-free, confidential, and immediate psychological support.",
  location: "Ismailia, Egypt",
  emergencyPhone: "080-8888-000"
};

export const COLORS = {
  primary: '#114B9A',    
  secondary: '#4AB9E2',  
  accent: '#F2548B',     
  text: '#1E293B',
  bg: '#F8FAFC'
};

// رابط الصورة الخاص باللوجو (يمكنك وضع الرابط المباشر للصورة هنا)
// سأستخدم اللوجو الذي صممناه سابقاً كـ SVG افتراضي، ولكن يمكنك استبداله بـ <img src="URL" /> بسهولة
export const LOGO_URL = "https://raw.githubusercontent.com/username/repo/main/logo.png"; // استبدل هذا برابط صورتك

export const LOGO_COMPONENT = (className?: string) => (
  <img 
    src="https://i.postimg.cc/rsFSgY5X/Untitled-design-removebg-preview.png" // رابط تجريبي يعبر عن الصورة التي أرسلتها
    alt="Safe Space Logo" 
    className={`w-full h-full object-contain ${className}`}
    onError={(e) => {
      // fallback في حالة فشل التحميل
      e.currentTarget.src = "https://i.postimg.cc/rsFSgY5X/Untitled-design-removebg-preview.png";
    }}
  />
);
