import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Logo from '../assets/logo.png';

function Welcome() {
  const navigation = useNavigation();

  function handlePinNavigation() {
    navigation.navigate('Secure');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          mybank
        </Text>
      </View>

      <View style={styles.image}>
        <Image source={Logo} />
      </View>

      <View>
        <Text style={styles.textFooter}>
          Touch ID sensor for access to mybank {"\n"} account
        </Text>

        <Text style={styles.textFooterDescription}>
          Please very your identify {"\n"} usign Touch ID
        </Text>

        <TouchableOpacity
          style={styles.wrapperPin}
          onPress={handlePinNavigation}
        >
          <MaterialCommunityIcons
            name="lock"
            color="#964FF8"
            size={16}
          />
          <Text style={styles.pin}>
            Enter access PIN
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    justifyContent: 'space-around'
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 36,
    color: '#964FF8',
    fontWeight: 'bold'
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textFooter: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 18
  },
  textFooterDescription: {
    textAlign: 'center',
    color: '#9C9C9F',
    fontSize: 16
  },
  wrapperPin: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pin: {
    color: '#964FF8',
    fontSize: 16,
    marginLeft: 5 
  }
});

export { Welcome };