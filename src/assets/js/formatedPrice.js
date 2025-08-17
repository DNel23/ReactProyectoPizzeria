export const formattedPrice = (numericPrice) => numericPrice.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  });