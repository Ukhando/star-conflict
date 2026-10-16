import type {ReactNode} from 'react';
import styles from './styles.module.css';




export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              This unofficial Star Conflict wiki brings together practical guides
              for players and server hosts.
            </p>
            <p>
              Find help installing the client, including steps for running the
              game on Linux with Proton.
            </p>
            <p>
              You can also learn how to set up a server, configure connections,
              and get ready to play with others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
