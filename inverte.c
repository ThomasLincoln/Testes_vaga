#include <stdio.h>
#include <string.h>


// 
int main(void) {
    char palavra[] = "Hello";
    size_t tamanho = strlen(palavra);
    for(int i = 0; i < tamanho / 2; i++) {
       char aux = palavra[i]; 
       palavra[i] = palavra[tamanho - i - 1];
       palavra[tamanho - i - 1] = aux; 
    }
    printf("%s", palavra);
}
