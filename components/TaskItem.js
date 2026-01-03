import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const TaskItem = ({ task, onToggle }) => (
  <Pressable style={s.row} onPress={() => onToggle(task.id)}>
    <View style={s.box}>{task.completed && <View style={s.dot} />}</View>
    <Text style={[s.txt, task.completed && s.done]}>{task.text}</Text>
  </Pressable>
);

const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF8EE', padding: 12, marginVertical: 6, borderRadius: 8 },
  box: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#7B2F1A', marginRight: 12, alignItems: 'center', justifyContent: 'center' },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#F2C94C' },
  txt: { flex: 1, fontSize: 16, color: '#3D2B20' },
  done: { textDecorationLine: 'line-through', color: '#8C6A46' },
});

export default TaskItem;
