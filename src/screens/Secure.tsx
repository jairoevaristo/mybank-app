import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Secure() {
  const pins = [1, 2, 3, 4, 5, 6];

  const [pinCount, setPinCount] = useState<number[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          mybank
        </Text>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.subtitle}>Enter yout PIN code</Text>
        <View style={styles.wrapperPinItem}>
        {pins.map(pin => (
            <View style={styles.pinItem} key={pin}>
              { pinCount.length > 0 &&
                <View style={styles.pinItemContent} /> 
              }              
            </View>
        ))}
        </View>
        <View
          style={styles.wrapperButtonPin}
        >
          <MaterialCommunityIcons
            name="lock"
            color="#964FF8"
            size={16}
          />
          <Text style={styles.pin}>
            Enter access PIN
          </Text>
        </View>
      </View>
    </SafeAreaView>
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
  wrapper: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subtitle: {
    color: '#ffff',
    fontSize: 16,
    marginBottom: 12
  },
  wrapperButtonPin: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pin: {
    color: '#964FF8',
    fontSize: 16,
    marginLeft: 5 
  },
  wrapperPinItem: {
    flexDirection: 'row',
  },
  pinItem: {
    margin: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderColor: '#5196F4',
    borderWidth: 3,
    position: 'relative'
  },
  pinItemContent: {
    width: 10, 
    backgroundColor: '#1866CF', 
    height: 10, 
    borderRadius: 5,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0
  }
});

export { Secure };