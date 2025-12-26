/**
 * Formatea un número a moneda de forma segura
 * @param valor Número a formatear
 * @param currency Código de moneda (COP, USD, MXN, EUR, etc.)
 * @param locale Región (es-CO, en-US, es-MX, etc.)
 */
export const formatCurrency = (
  valor: number, 
  currency: string = 'COP', 
  locale: string = 'en-CO'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(valor);
};