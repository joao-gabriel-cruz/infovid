import { useState, useContext } from 'react';
import { EstadoContext } from '../../context/EstadoContext';
import { useNavigate } from 'react-router-dom';

import { BsMoon, BsSun } from 'react-icons/bs';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { ImWarning } from 'react-icons/im';

import LogoClear from '../../assets/img/LogoClear.svg';
import LogoDark from '../../assets/img/LogoDark.svg';

import CasosConfirmados from '../../../components/CasosConfirmados';
import MortesConfirmadas from '../../../components/MortesConfirmadas';

import React from 'react';

import Style from '../../styles/style';
import './Casos.css';

export default function Casos() {
  const { estado, setMode, darkMode } = useContext(EstadoContext);
  const [casos, setCasos] = useState(true);
  const navigate = useNavigate();

  function AterarModo() {
    setMode();
  }

  return (
    <div style={darkMode ? Style.noturno : Style.claro}>
      <header
        style={darkMode ? { background: '#0E0E0E' } : { background: '#DBFFF6' }}
      >
        <nav style={Style.styleCasos.Headers}>
          <div>
            <button
              style={
                darkMode
                  ? { backgroundColor: '#0E0E0E', color: '#fff' }
                  : { backgroundColor: '#DBFFF6', color: '#000' }
              }
              onClick={() => navigate('/')}
            >
              <AiOutlineArrowLeft className="icon" />
            </button>
          </div>
          <div>
            <div style={Style.styleCasos.Icons}>
              <div className="logo">
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
             
                {darkMode ? (
                 <button 
                 className='iconHeaderMoon'
                 style={Style.styleCasos.IconButton} onClick={AterarModo}>  <BsMoon className="icon" /> </button>
                ) : (
                 <button 
                 className='iconHeaderSun'
                 style={Style.styleCasos.IconButton} onClick={AterarModo}>   <BsSun className="icon" /> </button>
                )}
             
            </div>
          </div>
        </nav>
      </header>
      <section>
        <div className='carrousel' >
          <div className='estado'>
            <h1>Estado: {estado.state}</h1>
          </div>

          {casos ? (
            <CasosConfirmados estado={estado} />
          ) : (
            <MortesConfirmadas estado={estado} />
          )}

          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <button
              style={
                darkMode
                  ? { backgroundColor: '#151515', color: '#fff' }
                  : { backgroundColor: '#fff', color: '#000' }
              }
              onClick={() => setCasos(true)}
            >
              <AiOutlineArrowLeft className="icon" />
            </button>
            <button
              style={
                darkMode
                  ? { backgroundColor: '#151515', color: '#fff' }
                  : { backgroundColor: '#fff', color: '#000' }
              }
              onClick={() => setCasos(false)}
            >
              <AiOutlineArrowRight className="icon" />
            </button>
          </div>
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
          className="dicas">
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
    
        </div>
        <div
          className='footerDicas'
            style={
              darkMode
                ? {
                    background: '#0E0E0E',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                : {
                    background: '#DBFFF6',
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
            }
          >
            <h3>
              Proteja-se! Higiene é saúde. A covid-19 não desapareceu.
            </h3>
          </div>
      </section>
      <footer
        style={darkMode ? Style.noturno.footerDark : Style.claro.footerLight}
      >
        <p>Desenvolvido Por Minecraft 2</p>
      </footer>
    </div>
  );
}
