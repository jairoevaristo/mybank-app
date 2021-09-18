import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type PinComponentProps = {
  pinValue: (item: number | ReactNode, index: number) => void;
}

function PinComponent({ pinValue }: PinComponentProps) {
  const pinNumbers = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
  ];

  return (
    <View style={styles.container}>
      {pinNumbers.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.pinItem}
          onPress={() => pinValue(item, index)}
        >
          <Text style={{ color: "#ffff", fontSize: 18 }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  pinItem: {
    width: 60,
    height: 60,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 30,
    borderColor: 'rgba(255, 255, 255, 0.20)',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { PinComponent };