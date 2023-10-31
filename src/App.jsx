import { Post } from "./Post"

export function App() {
  return (
    <div>
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

