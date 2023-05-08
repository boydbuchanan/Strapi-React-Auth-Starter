import React from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import { SideBySide } from 'layout/SideBySide/SideBySide';

function App() {
  return (
    <AppInfo></AppInfo>
  );
}

export default App;

export function AppInfo() {
  const { path } = useParams()
  return (
    <SideBySide style={{
      backgroundColor: '#677c92',
    }}>
      <h1>CMS</h1>
      <h2>/{path}</h2>
    </SideBySide>
  );
}
