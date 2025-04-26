import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: ' Automação Inteligente com RPA',
    Svg: require('@site/static/img/automation.svg').default,
    description: (
      <>
        Expertise em desenvolvimento, implantação e governança de automações utilizando plataformas líderes como Automation Anywhere (v11 e A360), 
        Blue Prism, Power Automate e UiPath. Experiência em C# para extensibilidade e soluções personalizadas.
      </>
    ),
  },
  {
    title: 'Arquitetura de Soluções e Cloud',
    Svg: require('@site/static/img/cloud_architecture.svg').default,
    description: (
      <>
        Capacidade de traduzir requisitos de negócio em soluções arquitetônicas robustas e escaláveis. Vivência em ambientes Cloud (Azure, AWS, GCP), 
        integração de sistemas e tecnologias como Containers (Kubernetes/AKS), Databricks e DataFactory.
      </>
    ),
  },
  {
    title: 'Desenvolvimento Full-Stack & Metodologias Ágeis',
    Svg: require('@site/static/img/fullstack_agile.svg').default,
    description: (
      <>
        Proficiência em linguagens de programação como Java, NodeJS, C#, Python e seus respectivos frameworks (SpringBoot, FastAPI, Flask). 
        Experiência com práticas de CI/CD, Git e metodologias ágeis (SCRUM, Lean Digital) para entrega contínua e eficiente.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
