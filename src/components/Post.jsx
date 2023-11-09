import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";

export function Post({author, pusblisheAt, content}) {
  const pusblisheDateFormated = format(pusblisheAt, "d 'de' LLLL 'às' HH:mm'h'")
  const dataPublicacaoRelativaAgora = formatDistanceToNow(pusblisheAt, {
    addSuffix: true
  })
  const [comentarios, setComentarios] = useState([1, 2]);

  function handleCriarNovoComentario(){
    event.preventDefault()
    setComentarios([...comentarios, comentarios.length + 1] )
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={pusblisheDateFormated} dateTime={pusblisheAt.toISOString()}>
        {dataPublicacaoRelativaAgora}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(linha =>{
          if(linha.type === 'paragraph'){
            return <p>{linha.content}</p>
          } else if(linha.type === 'link'){
            return <p> <a href="">{linha.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCriarNovoComentario} className={styles.commentFarm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário"/>

        <footer>
            <button type="submit">Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {comentarios.map(item =>{
          return(<Comment/>)
        })}
      </div>
    </article>
  );
}
