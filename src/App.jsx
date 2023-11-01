import { Post } from "./Post"
import { Header } from "./components/Header";
import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <Post 
        author="Ana" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque minus reiciendis molestias dignissimos cupiditate vero accusamus reprehenderit, repudiandae, cum maiores! Dolorum, nulla sapiente itaque et provident corrupti natus animi."
      />
      <Post
        author="Diego"
        content="Conteúdo 2"
      />
    </div>
  )
}

