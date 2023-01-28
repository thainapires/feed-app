//JSX = Javascript + XML
//Componente: Função que retorna HTML

import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Thainá Pires" 
            content="Lorem ipsum" 
          />
          <Post 
            author="Thainá Pires 2" 
            content="Lorem ipsum 2" 
          />          
        </main>
      </div>
    </div>
  )
}

//export default App
