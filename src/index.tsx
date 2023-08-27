import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>hello world!</h1>
    </div>
  );
};

const root = createRoot(document.getElementById('app') as Element);

root.render(<App />);
