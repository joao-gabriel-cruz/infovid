import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import Virus from '../assets/icons/Virus.svg';
import LogoClear from '../assets/img/LogoClear.svg';
import LogoDark from '../assets/img/LogoDark.svg';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import axios from 'axios';
import '../styles/Global.css';
import Style from '../styles/style';
import Casos from './Casos';

function Home() {
  const [data, setData] = useState([]);
  const [estado, setEstado] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [home , setHome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios('https://covid19-brazil-api.now.sh/api/report/v1')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  function AterarModo() {
    setDarkMode(!darkMode);
  }

  function BuscarEstado(event) {
    setEstado(event.target.value);
    setHome(false);
         
       
  }

  return (
     home ? (

      <div style={darkMode ? Style.noturno : Style.claro} className="Section">
        <Container>
          <header>
            <div className="Modos">
              <div className="icons">
                <AiFillInfoCircle className="iconHeader" />
                <a>Informações</a>
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
              <div className="box">
                <div className="logo">
                  <img src={Virus} alt="" id="virus" />
                  {darkMode ? (
                    <img src={LogoDark} alt="" />
                  ) : (
                    <img src={LogoClear} alt="" />
                  )}
                </div>
                <div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Selecione o estado
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={
                          darkMode
                            ? Style.noturno.selectDark
                            : Style.claro.selectLight
                        }
                        label="Selecione o estado"
                        onChange={BuscarEstado}
                      >
                        {data.length > 0 ? (
                          data.map((estado) => (
                            <MenuItem key={estado.uf} value={estado}>
                              {estado.uf}
                            </MenuItem>
                          ))
                        ) : (
                          <option>Carregando...</option>
                        )}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className="boxVideo">
                <h2
                  style={
                    darkMode
                      ? Style.noturno.textVideoDark
                      : Style.claro.textVideoLight
                  }
                >
                  Video Informativo:{' '}
                </h2>
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
            <footer
              style={
                darkMode ? Style.noturno.footerDark : Style.claro.footerLight
              }
            >
              <p>Desenvolvido Por Minecraft 2</p>
            </footer>
          </Container>
        </Container>
      </div>
    ):(
      <Casos estado={estado} />
    )

    
    );
}
export default Home;
