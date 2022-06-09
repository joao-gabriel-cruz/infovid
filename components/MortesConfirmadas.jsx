import './Components.css';

function MortesConfirmadas({ estado }) {
  return (
    <div className="dados">
      <div className="informacoes">
        <div id="text1">
          <p> Mortes Confirmadas:</p>
        </div>
        <div id="text2">
          <p>{estado.deaths}</p>
        </div>
        <div id="text3">
          <p>{estado.datetime}</p>
        </div>
      </div>
      <img
        src="https://pbs.twimg.com/media/ES7EZKwXQAAL4Ry?format=jpg&name=4096x4096"
        alt=""
      />
    </div>
  );
}
export default MortesConfirmadas;
