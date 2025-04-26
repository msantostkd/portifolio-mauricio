import React from 'react';
import styles from './AboutMe.module.css'; // Podemos criar este arquivo CSS depois

function AboutMe() {
  return (
    <section id="sobre-mim" className={styles.aboutMe}> {/* Adicione o ID aqui */}
      <div className="container">
        <h2>Sobre Mim</h2>
        <p>
          Sou um profissional apaixonado por tecnologia, com foco em automação inteligente, arquitetura de soluções e otimização de processos de negócio. Minha experiência abrange a implementação e governança de RPA em diversas plataformas, a concepção de arquiteturas escaláveis em ambientes Cloud (Azure, AWS, GCP) e o desenvolvimento utilizando linguagens como Java, C# e Python.
        </p>
        <p>
          Com uma sólida base em metodologias ágeis (SCRUM, Lean Digital) e um olhar atento para a inovação, busco constantemente aplicar meus conhecimentos para impulsionar a eficiência e a transformação digital nas organizações. Minha trajetória profissional inclui passagens por empresas como Spread Sistemas e Automação, Itaú-Unibanco e Grupo Boticário, onde liderei projetos de automação e participei da definição de estratégias de arquitetura.
        </p>
        <p>
          Atualmente, como Líder de Serviços de Tecnologia na Spread, continuo a desenvolver soluções inovadoras e a gerenciar o ciclo de vida de aplicações utilizando ferramentas como Azure DevOps. Minha formação em Redes de Computadores e Análise e Desenvolvimento de Sistemas, complementada por uma pós-graduação em Ciência de Dados e certificações relevantes, me permite abordar desafios complexos com uma perspectiva abrangente e estratégica.
        </p>
        {/* Você pode adicionar mais informações ou um link para uma página "Sobre Mim" mais detalhada aqui */}
      </div>
    </section>
  );
}

export default AboutMe;