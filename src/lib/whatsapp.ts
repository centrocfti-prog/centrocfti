export const WHATSAPP_NUMBER = "5491139277756"; // 011 15 3927-7756 con código de país AR
export const SCHOOL_NAME = "Centro de Formación en Técnica e Infraestructura";

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
