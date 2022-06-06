import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { BsMoon, BsSun } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ImWarning } from 'react-icons/im';
import Virus from '../assets/icons/Virus.svg';
import LogoClear from '../assets/img/LogoClear.svg';
import LogoDark from '../assets/img/LogoDark.svg';

import '../styles/Global.css';
import Style from '../styles/style';
import { Container, Box } from '@mui/material';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function Casos({ estado }) {
  const [darkMode, setDarkMode] = useState(false);
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

  function AterarModo() {
    setDarkMode(!darkMode);
  }

  return (
    <div style={darkMode ? Style.noturno : Style.claro} className="Section">
      <header
        style={darkMode ? { background: '#0E0E0E' } : { background: '#DBFFF6' }}
      >
        <div style={Style.styleCasos.Headers}>
          <div style={Style.styleCasos.IconButton}>
            <Link to="/">
              <AiOutlineArrowLeft className="iconHeader" />
            </Link>
          </div>
          <div>
            <div style={Style.styleCasos.Icons}>
              <div className="logo">
                <img style={{ width: '50px' }} src={Virus} alt="" id="virus" />
                {darkMode ? (
                  <img style={{ width: '120px' }} src={LogoDark} alt="" />
                ) : (
                  <img style={{ width: '120px' }} src={LogoClear} alt="" />
                )}
              </div>
            </div>
          </div>
          <div>
            <div>
              <button style={Style.styleCasos.IconButton} onClick={AterarModo}>
                {darkMode ? (
                  <BsMoon className="iconHeader" />
                ) : (
                  <BsSun className="iconHeader" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div>
          <div>
            <h1>{estado.state}</h1>
          </div>
          <div>
            <div style={Style.styleCasos.dados}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <p>Casos Confirmados: </p>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '17%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '50px',
                }}
              >
                <p>{estado.cases}</p>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  fontSize: '13px',
                }}
              >
                <p>Dados Atualizado: {estado.datetime}</p>
              </div>
            </div>
          </div>
          <img
            style={{ width: '100%' }}
            src="https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2020-03/blue-covid-banner.jpg?itok=N2g8afH3"
            alt=""
          />
        </div>

        {estado.cases > 2000 ? (
          <div style={Style.styleCasos.alertWarning}>
            <ImWarning />
            <p>
              ! Este estado possui um número elevado de casos confirmados nos
              últimos tempos!
            </p>
          </div>
        ) : (
          <div style={Style.styleCasos.alertSecurity}>
            <ImWarning />
            <p> Este estado possui estabilidade nos casos confirmados</p>
          </div>
        )}
        <div
          style={
            darkMode
              ? { background: '#011430', color: '#fff' }
              : { background: '#80C9FF', color: '#000' }
          }
        >
          <Container>
            <h2 style={Style.Text.title}>Dicas:</h2>
            <div style={Style.Text.subtitle}>
              <p>
                É recomendável usar máscara em locais lotados e/ou fechados,
                mesmo que haja algum decreto liberando.
              </p>
              <br />
              <p>Usar álcool em gel com frequencia.</p>
              <br />

              <p>Usar álcool em gel com frequencia.</p>
              <br />

              <p>
                Se possuir algum sintoma procure o posto de saúde mais próximo e
                evite sair de casa.
              </p>
              <br />

              <p>
                Se possuir algum sintoma procure o posto de saúde mais próximo e
                evite sair de casa.
              </p>
            </div>
          </Container>
          <div
            style={
              darkMode
                ? {
                    background: '#DBFFF6',
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                : {
                    background: '#0E0E0E',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
            }
          >
            <h3 style={{ fontSize: '15px', fontWeigth: '400', height: '30px',display: 'flex',
                    alignItems: 'center', }}>
              Proteja-se! Higiene é saúde. A covid-19 não desapareceu.
            </h3>
          </div>
        </div>
        <Container>
          <footer
            style={
              darkMode ? Style.noturno.footerDark : Style.claro.footerLight
            }
          >
            <p>Desenvolvido Por Minecraft 2</p>
          </footer>
        </Container>
      </section>
    </div>
  );
}
