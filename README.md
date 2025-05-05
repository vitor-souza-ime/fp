#Calculadora de Correção de Fator de Potência#

Um aplicativo React Native para calcular a capacitância necessária para correção do fator de potência com base nas entradas do usuário. Desenvolvido e testado usando Snack.

Funcionalidades:

Calcula a potência reativa a compensar (var) e a capacitância necessária (μF).
Campos de entrada para potência ativa (W), fator de potência atual, fator de potência desejado, tensão (V) e frequência (Hz).
Valida as entradas para garantir que sejam positivas e dentro de faixas aceitáveis (ex.: fator de potência < 1).
Exibe os resultados em uma interface clara e formatada.
Design responsivo com interface rolável.

Pré-requisitos:

Node.js (para desenvolvimento local, opcional se usar Snack).
Expo CLI (para desenvolvimento local).
Um navegador ou dispositivo móvel para testar o aplicativo no Snack.

Instalação:

Usando Snack:

Abra o projeto no Snack.
Copie e cole o código do App.js no editor do Snack.
Execute o aplicativo no navegador ou em um dispositivo/emulador conectado.


Desenvolvimento Local:

Clone o repositório:git clone <url-do-repositório>
cd correcao-fator-potencia


Instale as dependências:npm install


Inicie o servidor de desenvolvimento do Expo:npx expo start


Escaneie o QR code com o aplicativo Expo Go ou execute no navegador/emulador.



Uso

Insira os seguintes valores:
Potência Ativa (W): A potência em watts.
Fator de Potência Atual: O fator de potência existente (ex.: 0.75).
Fator de Potência Desejado: O fator de potência alvo (ex.: 0.95).
Tensão (V): A tensão do sistema.
Frequência (Hz): A frequência do sistema (padrão é 60 Hz).


Pressione o botão "Calcular Capacitor".
Veja os resultados:
Potência Reativa a Compensar: Em var.
Capacitância Requerida: Em microfarads (μF).



Estrutura do Código

App.js: Componente principal contendo a interface e a lógica para cálculos de correção de fator de potência.
Usa componentes do React Native (View, Text, TextInput, Button, ScrollView).
Estilos definidos usando StyleSheet para uma interface consistente.

Testes

O aplicativo foi testado no Snack para plataformas web e móveis.
Certifique-se de que as entradas sejam números válidos e que os fatores de potência estejam entre 0 e 1.
Entradas inválidas impedirão o cálculo e limparão os resultados anteriores.

Limitações

Não suporta entradas negativas ou zero.
Os fatores de potência devem ser menores ou iguais a 1.
Projetado para sistemas monofásicos; lógica adicional é necessária para sistemas trifásicos.

Contribuição

Faça um fork do repositório.
Crie uma nova branch (git checkout -b feature-branch).
Faça suas alterações e commit (git commit -m "Adicionar funcionalidade").
Envie para a branch (git push origin feature-branch).
Abra um pull request.

Licença
Este projeto está licenciado sob a Licença MIT.
Agradecimentos

Construído com React Native e Expo.
Testado usando Snack.

