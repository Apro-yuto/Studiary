import React from 'react';
import logo from '@/images/logo.svg';
import styles from '@/styles/App.module.sass';
import SignUp from '@/components/Signup';

const App: React.VFC = () => {
  return (
    <div className={styles.App}>
      <SignUp></SignUp>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App;
