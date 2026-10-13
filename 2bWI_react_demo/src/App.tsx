import "./App.css";
import Card from "./components/Card";
import InfoList from "./components/InfoList";
import judokas from "./data/judokas.json";

function App() {
  return (
    <div className="page">
      <h1>Judoka</h1>

      <div className="card-row">
        {judokas.map((judoka) => (
          <Card
            key={judoka.title}
            title={judoka.title}
            text={judoka.text}
            image={judoka.image}
          />
        ))}
      </div>

      <InfoList title="Iliadis" />
      <InfoList title="Bekauri" />
      <InfoList title="Maruyama" />
      <InfoList title="Grigalashvili" />
      <InfoList title="Abe" />
    </div>
  );
}

export default App;
