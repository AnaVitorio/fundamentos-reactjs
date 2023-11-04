import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/AnaVitorio.png"
          />
          <div className="authorInfo">
            <strong>Ana Carolina</strong>
            <span>Analista de TI</span>
          </div>
        </div>

        <time title="03 de novembro as 21:51" dateTime="2023-11-03">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
            Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um 
        </p>
        <p>
            projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀.
        </p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p>
            <a href="#">#novoprojeto</a>{" "}
            <a href="#">#nlw</a>{" "}
            <a href="#">#rocketseat</a>{" "}
        </p>
      </div>
    </article>
  );
}
