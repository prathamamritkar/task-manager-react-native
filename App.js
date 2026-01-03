import React, { useReducer, useCallback } from 'react';
import { StyleSheet, View, FlatList, Text, SafeAreaView, StatusBar } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const text = action.text?.trim();
      if (!text) return state;
      return [...state, { id: String(Date.now() + Math.random()), text, completed: false }];
    }
    case 'EDIT':
      return state.map(t => (t.id === action.id ? { ...t, text: action.text } : t));
    case 'TOGGLE':
      return state.map(t => (t.id === action.id ? { ...t, completed: !t.completed } : t));
    default:
      return state;
  }
};

export default function App() {
  const [tasks, dispatch] = React.useReducer(reducer, []);

  const addTask = useCallback(text => dispatch({ type: 'ADD', text }), []);
  const toggleTaskCompletion = useCallback(id => dispatch({ type: 'TOGGLE', id }), []);
  const editTask = useCallback((id, text) => dispatch({ type: 'EDIT', id, text }), []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Task Manager</Text>
      </View>

      <TaskInput onAddTask={addTask} />

      <View style={styles.tasksContainer}>
        <FlatList
          data={[...tasks.filter(t => !t.completed), ...tasks.filter(t => t.completed)]}
          renderItem={({ item }) => (
            <TaskItem task={item} onToggle={toggleTaskCompletion} onEdit={editTask} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF6EF' },
  header: { backgroundColor: '#7B2F1A', padding: 20, paddingTop: 30, paddingBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#FFF8E6' },
  tasksContainer: { flex: 1, padding: 12 },
});
