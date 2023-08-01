import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  const technology = [
    {
      id: 1,
      name: 'Javascript',
    },
    {
      id: 2,
      name: 'React JS',
    },
    {
      id: 3,
      name: 'React Native',
    },
    {
      id: 4,
      name: 'Express JS',
    },
  ];

  const [selected, setSelected] = useState(1);

  return (
    <View style={styles.container}>
      {technology.map((tech, index) => (
        <TouchableOpacity key={tech.id} onPress={() => setSelected(tech.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radioBtn}>
              {selected === tech.id ? (
                <View style={styles.radioBtnInnerStyle}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{tech.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: '20%',
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
