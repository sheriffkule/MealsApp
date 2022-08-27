import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function IconButon({onPress, icon, color}) {
  return (
    <Pressable
      android_ripple={{color: '#404fbf'}}
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={icon} size={35} color={color} />
    </Pressable>
  );
}

export default IconButon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
