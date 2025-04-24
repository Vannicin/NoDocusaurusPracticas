import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--7', styles.heroContent)}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--secondary button--lg',
                  styles.heroButton,
                )}
                to="/docs/intro">
                COMENZAR AHORA
              </Link>
              <Link
                className={clsx(
                  'button button--outline button--lg',
                  styles.heroButtonOutline,
                )}
                to="/docs/category/lo-básico">
                VER CONTENIDO
              </Link>
            </div>
          </div>
          <div className={clsx('col col--5', styles.heroImageContainer)}>
            <div className={styles.heroImage}>
              <img src="https://i.ibb.co/DDVz3FSD/inspectorelements.png" alt="Inspector de Elementos" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenido a ${siteConfig.title}`}
      description="Aprende a usar el inspector de elementos como un profesional con nuestra guía gratuita y completa">
      <HomepageHeader />
      <main>
        <section className={styles.introduction}>
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <h2 className={styles.sectionTitle}>¿QUÉ ES EL INSPECTOR DE ELEMENTOS?</h2>
                <p className={styles.sectionText}>
                  El Inspector de Elementos es una herramienta crucial para desarrolladores web 
                  que permite examinar y modificar en tiempo real el HTML, CSS y JavaScript de una página web.
                  Dominar esta herramienta te permitirá depurar problemas, optimizar tu código y entender
                  cómo están construidos los sitios web modernos.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <HomepageFeatures />
        
        <section className={styles.ctaSection}>
          <div className="container">
            <h2 className={styles.ctaTitle}>¿LISTO PARA CONVERTIRTE EN UN EXPERTO?</h2>
            <p className={styles.ctaText}>
              Nuestra documentación completa te guiará paso a paso para dominar el Inspector de Elementos
            </p>
            <div className={styles.ctaButtons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                COMENZAR EL TUTORIAL
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}