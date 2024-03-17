import React from 'react';
import { StartHeaderTab } from './components/StartHeaderTab/StartHeaderTab';
import { SectionGenerator } from './components/SectionGenerator/SectionGenerator';
import { ScrollState } from './context/ScrollContext';
import { QuizSection } from './components/QuizSection/QuizSection';

function App() {
  return (
    <div className="App">
      <ScrollState>
        <StartHeaderTab />
        <SectionGenerator />
        <QuizSection />
      </ScrollState>
    </div>
  );
}

export default App;
