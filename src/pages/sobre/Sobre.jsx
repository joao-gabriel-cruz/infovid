import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import './Sobre.css';

function Sobre() {
  return (
    <section className="Sobre">
      <header>
        <div className="headerIcon">
          <Link to="/">
            <AiOutlineArrowLeft />
          </Link>
        </div>
        <div className="headerTitulo">
          <h1>Informações</h1>
        </div>
      </header>
      <div className='section'>
        <Container>
          <div className="sobreInfo">
            <h2>Sobre o app</h2>
            <p>
              Este aplicativo é destinado para usuários que necessitam
              constantemente manter-se informado sobre as atualizações da
              Covid-19 pelo mundo. Além de conter informações gerais e dicas de
              prevensão da mesma. Assim facilitando a junção de informações de
              forma simples.
            </p>
          </div>
          <div className="sobreNos">
            <h2>Sobre nós</h2>
            <p>
              Este app é desenvolvido pela Minecraft 2, um grupo de alunos
              universitários. Criamos este app para cumprir a um projeto
              proposto durante o primeiro período de Ciência da Computação.
            </p>
            <br />
            <p>
              Envolvidos no projeto: <br />
              <br /> Alan Correia
              <br />
              <br /> Jhony Pfster
              <br /> <br />
              João Gabriel Pinho
              <br /> <br />
              Letícia Lindberght
              <br />
              <br /> Raphael Bragança <br />
              <br />
              Thaynara Damazio
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
export default Sobre;
