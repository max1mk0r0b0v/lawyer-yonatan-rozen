export const siteConfig = {
  name: "עו\"ד יונתן רוזן",
  description:
    "משרד בוטיק למקרקעין, עסקאות נדל\"ן, חוזים וליווי משפטי אישי ומדויק.",
  url: "https://yonatan-rozen-law.example",
  phone: "055-680-0707",
  whatsapp: "972556800707",
  location: "רחוב ברקוביץ' 4, תל אביב יפו, מגדל המוזיאון",
  hours: "א׳–ה׳ 09:00–19:00 | בתיאום מראש",
};

export const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "שלום, אשמח לתאם שיחת ייעוץ בנושא עסקת נדל\"ן"
)}`;
