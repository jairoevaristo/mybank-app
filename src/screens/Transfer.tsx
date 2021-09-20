import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';

import { PinComponent } from '../components/PinComponent';
import { ModalCard } from '../components/ModalCard';

import { RequestApi } from '../services/api';

function Transfer() {
  const [amountValue, setAmountValue] = useState<number[]>([]);
  const [limitAmount, setLimitAmount] = useState(false);
  const [successTransfer, setSuccessTransfer] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleAmount(item: number | any, index: number) {
      setAmountValue(prev => (
        index !== 10 ? [...prev, item] : prev.slice(0, prev.length - 1)
      ));
  }

  function handleCloseLimit() {
    setLimitAmount(false)
  }

  function handleCloseSuccess() {
    setSuccessTransfer(false)
  }

  async function handleSendTransfer() {
    setLoading(true);
    let sum = 0;

    try {
      await RequestApi();
      
      for (let i = 0; i < amountValue.length; i++) {
        sum += amountValue[i];
      }
  
      if (sum > 10000) {
        setLimitAmount(true);
      } else {
        setSuccessTransfer(true);
      }
    } catch(err) {
      alert("Erro, tente novamente mais tarde");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            mybank
          </Text>
        </View>

        <View style={styles.headerInput}>
          <Text style={styles.textInput}>
            $ {amountValue}
          </Text>
        </View>

        <View style={styles.subText}>
          <Text style={styles.subTextInput}>
            Realizar transferência para {"\n"} Jairo Evaristo
          </Text>
        </View>

        <PinComponent pinValue={handleAmount} />

      <View style={styles.wrapperButtonSend}>
        <TouchableOpacity
          style={styles.buttonSend}
          onPress={handleSendTransfer}
        >
          <Text style={styles.textButtonSend}>Confirmar</Text>
        </TouchableOpacity>
      </View>

        <Modal
          animationType="slide"
          visible={limitAmount}
          transparent
          style={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}
        >
          <View style={{ flex: 1 }} />
          <ModalCard
            text="O valor das suas transferências está limitado até $ 10.000" 
            title="Operação inválida"
            image={require('../assets/success.png')}
            close={handleCloseLimit}
          />
        </Modal>

        <Modal
          animationType="slide"
          visible={successTransfer}
          transparent
          style={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}
        >
          <View style={{ flex: 1 }} />
          <ModalCard
            text="Sua trasferencia foi realizada com sucesso." 
            title="Operação concluída"
            image={require('../assets/success.png')}
            close={handleCloseSuccess}
          />
        </Modal>

        {
          loading 
            && (
                <View style={styles.loadContent}>
                  <ActivityIndicator color="#fff" size="large" />
                </View>
              )
        }
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },
  header: {
    paddingTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 36,
    color: '#964FF8',
    fontWeight: 'bold'
  },
  headerInput: {
    width: '100%',
    height: 50,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    fontSize: 28,
    paddingHorizontal: 40,
    fontWeight: 'bold',
    color: '#fff',
    borderBottomColor: '#9C9C9F',
    borderBottomWidth: 1,
  },
  subText: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subTextInput: {
    color: '#9C9C9F',
    fontSize: 16,
    textAlign: 'center'
  },
  wrapperButtonSend: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSend: {
    width: 220,
    height: 50,
    backgroundColor: '#5196F4',
    borderRadius: 3,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButtonSend: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  loadContent: {
    flex: 1,
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
  }
});

export { Transfer };