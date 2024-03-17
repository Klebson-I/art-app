import React from 'react';
import { StartHeaderTab } from './components/StartHeaderTab/StartHeaderTab';
import { SectionGenerator } from './components/SectionGenerator/SectionGenerator';
import { ScrollState } from './context/ScrollContext';

function App() {
  return (
    <div className="App">
      <ScrollState>
        <StartHeaderTab />
        <SectionGenerator />
      </ScrollState>
    </div>
  );
}

export default App;
