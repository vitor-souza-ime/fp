
```markdown
# Correção do Fator de Potência com React Native

Este projeto é um aplicativo desenvolvido em **React Native** (usando Expo) para calcular a **capacitância necessária à correção do fator de potência** em sistemas elétricos. Ele é ideal para engenheiros, técnicos, professores e estudantes da área elétrica que desejam obter o valor do capacitor necessário para melhorar o desempenho energético de uma instalação.

---

## ✨ Funcionalidades

- Interface simples e amigável
- Entrada de dados como: potência ativa, fator de potência atual e desejado, tensão e frequência
- Cálculo automático da potência reativa (var) a ser compensada
- Cálculo da capacitância equivalente (μF) para correção
- Resultados exibidos de forma clara

---

## 📐 Fórmulas Utilizadas

### Potência Reativa do Capacitor:

```

Qc = P × (tan(acos(fp\_atual)) - tan(acos(fp\_desejado)))

```

### Capacitância Requerida:

```

C = Qc / (2 × π × f × V²)

````

Onde:

- `Qc`: potência reativa necessária (em var)
- `P`: potência ativa (em watts)
- `fp_atual`: fator de potência atual (ex: 0.75)
- `fp_desejado`: fator de potência desejado (ex: 0.95)
- `f`: frequência da rede elétrica (em Hz)
- `V`: tensão da rede (em Volts)
- `C`: capacitância resultante (em Farads), convertida para μF no app

---

## 📲 Como Usar

### 1. Executar no Expo Snack (mais simples)

Acesse: [https://snack.expo.dev](https://snack.expo.dev), cole o código do `App.js` e teste direto no navegador ou no celular usando o **Expo Go**.

### 2. Executar Localmente

Requisitos:

- Node.js
- Expo CLI (`npm install -g expo-cli`)

Passos:

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
npm install
expo start
````

---

## 🧪 Exemplo de Uso

**Entradas:**

* Potência ativa: 1000 W
* Fator de potência atual: 0.75
* Fator de potência desejado: 0.95
* Tensão: 220 V
* Frequência: 60 Hz

**Resultado:**

* Potência reativa a compensar: aproximadamente 505 var
* Capacitância requerida: aproximadamente 27.32 μF

---

## 📁 Estrutura do Código

* `App.js`: contém toda a interface e lógica do aplicativo
* `useState`: usado para armazenar entradas do usuário
* `TextInput`, `Button`, `View`, `ScrollView`: componentes visuais da aplicação
* `StyleSheet`: organização de estilos para melhor aparência

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---
