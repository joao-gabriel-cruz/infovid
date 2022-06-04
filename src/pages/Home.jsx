import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import Virus from '../assets/icons/Virus.svg';
import LogoClear from '../assets/img/LogoClear.svg';
import LogoDark from '../assets/img/LogoDark.svg';

import axios from 'axios';
import '../styles/Global.css';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios('https://covid19-brazil-api.now.sh/api/report/v1')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  function AterarModo() {
    setDarkMode(!darkMode);
  }
  const noturno = {
    backgroundColor: '#151515',
    color: '#fff',
    selectDark: {
      backgroundColor: '#232323',
      color: '#6F6F6F',
      boder: 'none',
    },
    textVideoDark:{
      color: '#fff',
    },
    footerDark:{
      backgroundColor: '#111111',
      color: '#555555'
    }
  };

  const claro = {
    backgroundColor:  '#fff',
    color: '#000',
    selectLight: {
      backgroundColor: ' #EBEBEB',
      color: '#595959',
      boder: 'none',
    },
    textVideoLight:{
      color: '#000',
    },
    footerLight:{
      backgroundColor: '#D9D9D9',
      color: '#5C5C5C'

    }
  };

  const [estado, setEstado] = useState([]);

  function BuscarEstado() {
    const uf = document.getElementById('uf').value;
    axios(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`)
      .then((res) => setEstado(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div style={darkMode ? noturno : claro} className="Home">
      <Container>
        <header>
          <div className="Modos">
            <div>
              <div className="icons">
                <AiFillInfoCircle className="iconHeader" />
                <a>Informações</a>
              </div>
            </div>
            <div className="icons">
              <button onClick={AterarModo}>
                {darkMode ? (
                  <BsMoon className="iconHeader" />
                ) : (
                  <BsSun className="iconHeader" />
                )}
              </button>
              <p>Modo noturno</p>
            </div>
          </div>
          <div className="headerText">
            <h2>
              Bem vindo ao <span>infovid</span>, o app com informações sobre a
              COVID-19.
            </h2>
          </div>
        </header>
        <Container>
          <section>
            <div className='box'>
              <div className="logo">
                <img src={Virus} alt="" id="virus" />
                {darkMode ? (
                  <img src={LogoDark} alt="" />
                ) : (
                  <img src={LogoClear} alt="" />
                )}
              </div>
              <div>
                <form onSubmit={BuscarEstado}>
                  <select style={darkMode ? noturno.selectDark : claro.selectLight}>
                    <option value="">Selecione o Estado</option>
                    {data.length > 0 ? (
                      data.map((estado) => (
                        <option key={estado.uf} value={estado.uf}>
                          {estado.uf}
                        </option>
                      ))
                    ) : (
                      <option>Carregando...</option>
                    )}
                  </select>
                </form>
              </div>
            </div>
            <div className='boxVideo'>
              <h2 style={darkMode ? noturno.textVideoDark : claro.textVideoLight } >Video Informativo: </h2>
              <iframe
                src="https://www.youtube.com/embed/LwUjglzIUhc"
                title="YouTube video player"
                rameborde="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </Container>
        <Container>
          <footer style={darkMode ? noturno.footerDark : claro.footerLight}  >
            <p>Desenvolvido Por Minecraft 2</p>
          </footer>
        </Container>
      </Container>
    </div>
  );
}
export default Home;
