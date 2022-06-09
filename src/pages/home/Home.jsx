import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import LogoClear from '../../assets/img/LogoClear.svg';
import LogoDark from '../../assets/img/LogoDark.svg';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import axios from 'axios';
import './Home.css';
import Style from '../../styles/style';

import { EstadoContext } from '../../context/EstadoContext';

function Home() {
  const [data, setData] = useState([]);
  const [estado, setEstado] = useState([]);
  const navigate = useNavigate();

  const { selectEstado, setMode, darkMode } = useContext(EstadoContext);

  useEffect(() => {
    axios('https://covid19-brazil-api.now.sh/api/report/v1')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  function AterarModo() {
    setMode();
  }

  function BuscarEstado(e) {
    selectEstado(e.target.value);
    navigate('/casos');
  }

  return (
    <div style={darkMode ? Style.noturno : Style.claro} className="Section">
      <div>
        <div className="Modos">
          <div className="icons">
            <AiFillInfoCircle className="iconHeader" />
            <Link to="/sobre">
              <p className="link">Informações</p>
            </Link>
          </div>
          <div className="icons">
            {darkMode ? (
              <button className="iconHeaderMoon" onClick={AterarModo}>
      
                <BsMoon className="iconHeaderMoon" />
              </button>
            ) : (
              <button onClick={AterarModo}>
           
                <BsSun className="iconHeaderSun" />
              </button>
            )}

            <p>Modo noturno</p>
          </div>
        </div>
      </div>
      <Container>
        <div className='section'>
          <div className="headerText">
            <h2>
              Bem vindo ao <span>infovid</span>, o app com informações sobre a
              COVID-19.
            </h2>
          </div>
          <div className="box">
            <div className="logo">
              {darkMode ? (
                <img src={LogoDark} alt="" />
              ) : (
                <img src={LogoClear} alt="" />
              )}
            </div>
            <div>
              <Box>
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
        </div>
      </Container>

      <footer
        style={darkMode ? Style.noturno.footerDark : Style.claro.footerLight}
      >
        <p>Desenvolvido Por Minecraft 2</p>
      </footer>
    </div>
  );
}
export default Home;
