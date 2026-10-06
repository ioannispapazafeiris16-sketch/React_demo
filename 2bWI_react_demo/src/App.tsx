import './App.css'
import InfoList from './components/InfoList'

function App() {
  const cards = [1, 2, 3, 4, 5, 6]

  return (
    <div className="page">
      <h1>Judoka</h1>

      <div className="card-row">
        {cards.map((card) => (
          <div className="card" key={card}>
            <div className="card-header">Iliadis</div>

            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/180423132121-ilias-iliadis-of-greece-judo.jpg?q=x_4,y_182,h_1967,w_3496,c_crop"
              alt="Ilias Iliadis"
            />

            <div className="card-footer">Champion</div>
          </div>
        ))}
      </div>

      <InfoList title="Judo-Star Iliadis" />
      <InfoList title="Sein großer Erfolg " />
      <InfoList title="Der Olympiasieger" />
      <InfoList title="Sein Weg zum Erfolg" />
      <InfoList title="Iliadis als Legende" />
    </div>
  )
}

export default App
