import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Ana"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque minus reiciendis molestias dignissimos cupiditate vero accusamus reprehenderit, repudiandae, cum maiores! Dolorum, nulla sapiente itaque et provident corrupti natus animi."
          />
          <Post author="Diego" content="Conteúdo 2" />
        </main>
      </div>
    </div>
  );
}
