import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageProps,
  TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

type ModalCardProps = {
  title: string;
  text: string;
  image: ImageProps;
  close: () => void;
}

function ModalCard({ image, text, title, close }: ModalCardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.wrapperHeaderClose}
        onPress={close}
      >
        <MaterialCommunityIcons
          name="close"
          color="#fff"
          size={28}
          style={{ alignSelf: 'flex-end' }}
        />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <Text style={styles.text}>
        {text}
      </Text>
      <View style={styles.wrapperImage}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: '#9C9C9F',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 12
  },
  wrapperHeaderClose: {
    alignSelf: 'flex-end',
  },
  text: {
    marginVertical: 20,
    color: '#9C9C9F',
    fontSize: 18,
    textAlign: 'center'
  },
  wrapperImage: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200
  }
})

export { ModalCard };