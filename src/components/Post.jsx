import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";

export function Post({ author, pusblisheAt, content }) {
  const [comentarios, setComentarios] = useState([
    "Muito bom Devon, parabéns!! 👏👏",
  ]);
  const [novoComentarioTexto, setNovoComentarioTexto] = useState("");

  const pusblisheDateFormated = format(
    pusblisheAt,
    "d 'de' LLLL 'às' HH:mm'h'"
  );

  //Calcula a diferença da data atual menos a data passado como primeiro parâmetro
  const dataPublicacaoRelativaAgora = formatDistanceToNow(pusblisheAt, {
    addSuffix: true,
  });

  function handleCriarNovoComentario(event) {
    event.preventDefault();
    setComentarios([...comentarios, novoComentarioTexto]);
    setNovoComentarioTexto("");
  }

  function handleNovoComentarioTexto(event) {
    setNovoComentarioTexto(event.target.value);
  }

  function deletarComentario(comentariosToDelete) {
    const novaListaComentarios = comentarios.filter(comentario =>{
      return comentario !== comentariosToDelete;
    })

    setComentarios(novaListaComentarios);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={pusblisheDateFormated}
          dateTime={pusblisheAt.toISOString()}
        >
          {dataPublicacaoRelativaAgora}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((linha) => {
          if (linha.type === "paragraph") {
            return <p key={linha.content}>{linha.content}</p>;
          } else if (linha.type === "link") {
            return (
              <p key={linha.content}>
                {" "}
                <a href="">{linha.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCriarNovoComentario} className={styles.commentFarm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentário"
          onChange={handleNovoComentarioTexto}
          value={novoComentarioTexto}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comentarios.map((item) => {
          return (
            <Comment
              key={item}
              conteudo={item}
              deletarComentario={deletarComentario}
            />
          );
        })}
      </div>
    </article>
  );
}
