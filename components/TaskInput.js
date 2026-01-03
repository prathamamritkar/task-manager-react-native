import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

export default function TaskInput({ onAddTask }) {
  const [text, setText] = useState('');
  const submit = () => {
    const v = text.trim();
    if (!v) return;
    onAddTask(v);
    setText('');
  };

  return (
    <View style={s.row}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Add a task..."
        onSubmitEditing={submit}
        returnKeyType="done"
        style={s.input}
        placeholderTextColor="#8C6A46"
      />
      <Pressable onPress={submit} style={s.bt}>
        <Text style={s.plus}>+</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', padding: 12, backgroundColor: '#FFF8EE' },
  input: { flex: 1, padding: 10, borderRadius: 8, backgroundColor: '#F6EAD8', color: '#3D2B20' },
  bt: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#C47D00', alignItems: 'center', justifyContent: 'center', marginLeft: 8 },
  plus: { color: '#FFF8E6', fontSize: 28 },
});
