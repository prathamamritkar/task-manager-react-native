import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';

const TaskItem = ({ task, onToggle, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.text);
  const inputRef = useRef(null);

  useEffect(() => setValue(task.text), [task.text]);

  useEffect(() => {
    if (editing) {
      setTimeout(() => inputRef.current?.focus?.(), 0);
    }
  }, [editing]);

  const save = () => {
    const v = value.trim();
    if (v && v !== task.text) onEdit?.(task.id, v);
    setEditing(false);
  };

  return (
    <View style={s.row}>
      <Pressable style={s.main} onPress={() => onToggle(task.id)}>
        <View style={s.box}>
          <Text style={s.check}>{task.completed ? '✓' : ''}</Text>
        </View>
        {editing ? (
          <TextInput ref={inputRef} value={value} onChangeText={setValue} onSubmitEditing={save} onBlur={save} style={s.input} />
        ) : (
          <Text style={[s.txt, task.completed && s.done]}>{task.text}</Text>
        )}
      </Pressable>

      {!task.completed && (
        <Pressable onPress={() => setEditing(true)} style={s.editBtn}>
          <Text style={s.editIcon}>✎</Text>
        </Pressable>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF8EE', padding: 12, marginVertical: 6, borderRadius: 8 },
  main: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  box: { width: 20, height: 20, borderRadius: 4, borderWidth: 2, borderColor: '#7B2F1A', marginRight: 12, alignItems: 'center', justifyContent: 'center' },
  check: { color: '#F2C94C', fontSize: 14, lineHeight: 16 },
  txt: { flex: 1, fontSize: 16, color: '#3D2B20' },
  done: { textDecorationLine: 'line-through', color: '#8C6A46' },
  editBtn: { padding: 6, opacity: 0.35 },
  editIcon: { fontSize: 18, color: '#7B2F1A' },
  input: { flex: 1, paddingVertical: 2, fontSize: 16, color: '#3D2B20' },
});

export default TaskItem;
