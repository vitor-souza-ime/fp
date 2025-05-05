import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [potencia, setPotencia] = useState('');
  const [fpAtual, setFpAtual] = useState('');
  const [fpDesejado, setFpDesejado] = useState('');
  const [tensao, setTensao] = useState('');
  const [frequencia, setFrequencia] = useState('60');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const P = parseFloat(potencia);       // em watts
    const fp1 = parseFloat(fpAtual);
    const fp2 = parseFloat(fpDesejado);
    const V = parseFloat(tensao);
    const f = parseFloat(frequencia);

    if (P > 0 && fp1 > 0 && fp2 > 0 && V > 0 && f > 0 && fp1 < 1 && fp2 <= 1) {
      const ang1 = Math.acos(fp1);
      const ang2 = Math.acos(fp2);

      const Qc = P * (Math.tan(ang1) - Math.tan(ang2)); // em var

      const C = Qc / (2 * Math.PI * f * V * V); // em farads
      const C_micro = C * 1e6; // para microfarads

      setResultado({
        Qc: Qc.toFixed(2),
        C: C_micro.toFixed(2),
      });
    } else {
      setResultado(null);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Correção do Fator de Potência</Text>

      <TextInput
        style={styles.input}
        placeholder="Potência ativa (W)"
        keyboardType="numeric"
        value={potencia}
        onChangeText={setPotencia}
      />
      <TextInput
        style={styles.input}
        placeholder="FP atual (ex: 0.75)"
        keyboardType="numeric"
        value={fpAtual}
        onChangeText={setFpAtual}
      />
      <TextInput
        style={styles.input}
        placeholder="FP desejado (ex: 0.95)"
        keyboardType="numeric"
        value={fpDesejado}
        onChangeText={setFpDesejado}
      />
      <TextInput
        style={styles.input}
        placeholder="Tensão (V)"
        keyboardType="numeric"
        value={tensao}
        onChangeText={setTensao}
      />
      <TextInput
        style={styles.input}
        placeholder="Frequência (Hz)"
        keyboardType="numeric"
        value={frequencia}
        onChangeText={setFrequencia}
      />

      <Button title="Calcular Capacitor" onPress={calcular} />

      {resultado && (
        <View style={styles.resultBox}>
          <Text style={styles.result}>Potência Reativa a Compensar: {resultado.Qc} var</Text>
          <Text style={styles.result}>Capacitância Requerida: {resultado.C} μF</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 50,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 6,
  },
  result: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});
