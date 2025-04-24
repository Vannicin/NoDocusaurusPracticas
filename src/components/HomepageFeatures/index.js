import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'INSPECCIONAR ELEMENTOS',
    icon: '🔍',
    description: (
      <>
        Aprende a navegar por el código HTML, examinar y modificar elementos en tiempo real
        para entender cómo están estructurados los sitios web.
      </>
    ),
  },
  {
    title: 'ANALIZAR ESTILOS CSS',
    icon: '🎨',
    description: (
      <>
        Domina las herramientas para ver y editar estilos CSS, entender la cascada y resolver
        problemas de diseño con facilidad.
      </>
    ),
  },
  {
    title: 'DEPURAR JAVASCRIPT',
    icon: '⚡',
    description: (
      <>
        Descubre cómo utilizar la consola y el depurador para analizar el comportamiento de tu JavaScript
        y solucionar errores rápidamente.
      </>
    ),
  },
  {
    title: 'OPTIMIZAR RENDIMIENTO',
    icon: '🚀',
    description: (
      <>
        Usa las herramientas de rendimiento para identificar cuellos de botella, mejorar la carga
        de páginas y crear experiencias web más rápidas.
      </>
    ),
  },
  {
    title: 'ADAPTAR DISEÑOS',
    icon: '📱',
    description: (
      <>
        Visualiza y prueba cómo se ve tu sitio en diferentes dispositivos y resoluciones 
        para garantizar un diseño responsivo perfecto.
      </>
    ),
  },
  {
    title: 'TRUCOS AVANZADOS',
    icon: '🔧',
    description: (
      <>
        Accede a técnicas profesionales para manipular cookies, simular geolocalización,
        editar solicitudes de red y mucho más.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.feature}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.featuresTitle}>LO QUE APRENDERÁS</h2>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}