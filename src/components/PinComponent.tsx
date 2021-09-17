import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type PinComponentProps = {
  pinValue: (item: number) => void;
}

function PinComponent({ pinValue }: PinComponentProps) {
  const pinNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <View style={styles.container}>
      {pinNumbers.map(item => (
        <TouchableOpacity
          key={item}
          style={styles.pinItem}
          onPress={() => pinValue(item)}
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