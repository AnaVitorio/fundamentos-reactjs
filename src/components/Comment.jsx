import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/AnaVitorio.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ana Carolina</strong>
              <time title="03 de novembro as 21:51" dateTime="2023-11-03">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário">
                <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
            <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
