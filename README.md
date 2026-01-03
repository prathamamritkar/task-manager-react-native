# Task Manager App (React Native)

A tiny Task Manager built with React Native + Expo. Focus: add tasks, view them in a list, and mark tasks completed.

## Features

- Add tasks using the input field
- Display tasks using `FlatList`
- Mark tasks as completed by tapping an item
- Implemented with functional components and hooks (no backend)
- Toggle completion with a checkbox (checked items shown below incomplete ones)
- Edit incomplete tasks inline via a subtle edit icon (tap to focus)

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start the dev server and open web or device:

```bash
npm start
# then press 'w' to open web, or scan the QR with Expo Go
```

## Project Structure

```
components/
  TaskInput.js   # add-task input
  TaskItem.js    # single task row (toggle completion)
App.js           # app state and list (useReducer)
package.json
app.json
babel.config.js
```

## Behavior details

- Tasks are stored in-memory using a reducer (`useReducer`).
- The list orders incomplete tasks first, then completed tasks (preserves relative order).
- Incomplete tasks show a small edit icon at the right; tapping it focuses the inline textbox for quick edits.
- No persistence: add `AsyncStorage` later if you want to save tasks between sessions.

## Notes

- The app is intentionally minimal: add, list, toggle. No persistence or backend.
- If you want persistence later, add `AsyncStorage` or integrate with an external API.

For development questions, see the Expo docs: https://docs.expo.dev/
