import './Components.css';

function CasosConfirmados({ estado }) {
  return (
    <div className="dados">
      <div className="informacoes">
        <div id="text1">
          <p>Casos Confirmados:</p>
        </div>
        <div id="text2">
          <p>{estado.cases}</p>
        </div>
        <div id="text3">
          <p>{estado.datetime}</p>
        </div>
      </div>
      <img
        src="https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2020-03/blue-covid-banner.jpg?itok=N2g8afH3"
        alt=""
      />
    </div>
  );
}
export default CasosConfirmados;
