export const formatPrice = (price: number) => {
  //taxa de cambio atual
  const cambioTax = 5.25;
  const convertPrice = price * cambioTax;

  // Formata o valor para pt-BR
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(convertPrice);
};