import Image from "next/image";
import styles from "../../styles/Projects/Content.module.css";

export default function Content() {
    return (
        <div className={styles.container}>

            <hr className={styles.divider} />

            <div className={styles.archive_container}>
                <h4 className={styles.archive_header}>Archives</h4>
                <div className={styles.archive_content}>
                    Some of the old projects that I worked on.
                </div>

                <div className={styles.archive_project}>
                    <a
                        href="https://github.com/neelbavarva/Spring-Blog"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h4>
                            Spring Blog
                            <div />
                        </h4>
                    </a>
                    <div>
                        A full stack blog app made using React.js and Spring
                        Boot.
                    </div>
                </div>
                <div className={styles.archive_project}>
                    <a
                        href="https://github.com/neelbavarva/Contactless-Menu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h4>
                            Contactless Menu
                            <div />
                        </h4>
                    </a>
                    <div>
                        An Android application for restaurants that displays
                        menu cards on scanning the QR code.
                    </div>
                </div>
                <div className={styles.archive_project}>
                    <a
                        href="https://github.com/neelbavarva/Spotify-Clone"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h4>
                            Spotify Clone
                            <div />
                        </h4>
                    </a>
                    <div>
                        A front-end clone of Spotify made using React.js and
                        Spotify developers&apos;s API.
                    </div>
                </div>
            </div>
        </div>
    );
}
