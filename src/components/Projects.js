import React from 'react';
import styles from './Projects.module.css'; // Podemos criar este arquivo CSS depois

const ProjectList = [
  {
    title: 'Projeto de Automação de Processo de Faturação',
    description: 'Desenvolvimento de robôs RPA utilizando Automation Anywhere para automatizar o processo de geração e envio de faturas, reduzindo erros e tempo de ciclo.',
    technologies: ['Automation Anywhere', 'RPA', 'SQL Server'],
    link: '#', // Adicione o link para o projeto (se houver)
  },
  {
    title: 'Arquitetura de Microsserviços em Cloud',
    description: 'Concepção e implementação de uma arquitetura baseada em microsserviços utilizando Azure Kubernetes Service (AKS) para uma aplicação de e-commerce, visando escalabilidade e resiliência.',
    technologies: ['Azure', 'AKS', 'Docker', 'C#', '.NET Core'],
    link: '#',
  },
  {
    title: 'Pipeline de CI/CD para Aplicação Java',
    description: 'Criação de um pipeline de Integração Contínua e Entrega Contínua (CI/CD) utilizando Azure DevOps para automatizar o build, teste e deploy de uma aplicação Java Spring Boot.',
    technologies: ['Java', 'SpringBoot', 'Azure DevOps', 'Git', 'Maven'],
    link: '#',
  },
  // Adicione mais projetos aqui
];

function Project({ title, description, technologies, link }) {
  return (
    <div className={styles.projectItem}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <span key={index} className={styles.techBadge}>{tech}</span>
        ))}
      </div>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>}
    </div>
  );
}

function Projects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <h2>Projetos</h2>
        <div className={styles.projectList}>
          {ProjectList.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;