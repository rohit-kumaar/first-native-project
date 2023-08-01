import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  const [selected, setSelected] = useState(1);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSelected(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radioBtn}>
            {selected === 1 ? (
              <View style={styles.radioBtnInnerStyle}></View>
            ) : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelected(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radioBtn}>
            {selected === 2 ? (
              <View style={styles.radioBtnInnerStyle}></View>
            ) : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  radioWrapper: {
    flexDirection: 'row',
    gap: 20,
  },

  radioBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#7F00FF',
  },

  radioBtnInnerStyle: {
    width: 25,
    height: 25,
    backgroundColor: '#7F00FF',
    borderRadius: 20,
  },

  radioText: {
    fontSize: 30,
  },
});
