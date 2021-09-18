import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { PinComponent } from '../components/PinComponent';
import { ModalCard } from '../components/ModalCard';

function Transfer() {
  const [amountValue, setAmountValue] = useState<number[]>([]);
  const [limitAmount, setLimitAmount] = useState(false);

  function handleAmount(item: number | any, index: number) {
      setAmountValue(prev => (
        index !== 10 ? prev + item : prev.slice(0, prev.length - 1)
      ));
  }

  function handleClose() {
    setLimitAmount(false)
  }

  function getvalueAmount() {
    let sum = 0;
    
    for (let i = 0; i < amountValue.length; i++) {
      sum += amountValue[i];
    }

    if (sum > 10000) {
      setLimitAmount(true);
    }
  }

  useEffect(() => {
    getvalueAmount();
  }, [amountValue])

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
            transfer amount to be made to {"\n"} Jairo Evaristo
          </Text>
        </View>

        <PinComponent pinValue={handleAmount} />

      <View style={styles.wrapperButtonSend}>
        <TouchableOpacity style={styles.buttonSend}>
          <Text style={styles.textButtonSend}>Enter</Text>
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
            text="Voce nao pode transferir um valor desse tanto" 
            title="Deu erro ai menor"
            image={require('../assets/success.png')}
            close={handleClose}
          />
        </Modal>
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
  }
});

export { Transfer };