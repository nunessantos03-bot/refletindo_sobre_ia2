const nomes = ["Vitoria", "Fernanda", "Amanda", "Bruna", "Joao", "Marcos", "Lucas"];

export function aleatorio (lista){
  const posicao = Math.floor(Math.random()* lista. length);
  return lista[posicao];
}

export const nome = aleatorio(nomes) 
