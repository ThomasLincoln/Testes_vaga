#include <stdio.h>

int pertence(int numero) {
  int primeiro = 0, segundo = 1, terceiro = 0;

  while (terceiro < numero) {
    terceiro = primeiro + segundo;
    primeiro = segundo;
    segundo = terceiro;
  }

  return terceiro == numero;
}

int main(void) {
  int userInput = 0;

  printf("Insira um valor: ");
  scanf("%i", &userInput);

  if (pertence(userInput)) {
    printf("Pertence à sequência Fibonacci");
  } else {
    printf("Não pertence à sequência Fibonacci");
  }
  return 0;
}
