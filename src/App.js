import logo from './logo.svg';
import './App.css';

import { useTranslation } from 'blendin-react';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("This is an example of how good Blendin can be")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Learn how to use React')}
        </a>
      </header>
    </div>
  );
}

export default App;
