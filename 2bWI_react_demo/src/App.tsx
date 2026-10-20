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

      <div>
        <Card image="https://picsum.photos/200/300" title="Test" text="text" />
        <Card image="https://picsum.photos/200/300" title="Test" text="text" />
        <Card image="https://picsum.photos/200/300" title="Test" text="text" />
      </div>

      <InfoList
        title="Iliadis"
        items={["Olympiasieger", "Griechischer Judoka", "Gold mit 17 Jahren"]}
      />
      <InfoList
        title="Bekauri"
        items={[
          "Olympiasieger",
          "Georgischer Judoka",
          "Wettkampfgewicht: -90 kg",
        ]}
      />
      <InfoList
        title="Maruyama"
        items={["Japanischer Judoka", "Bekannt für seine Ippon-Techniken"]}
      />
      <InfoList
        title="Grigalashvili"
        items={[
          "Georgischer Judoka",
          "Weltmeister",
          "Bekannt für seine Bodenarbeit",
        ]}
      />
      <InfoList
        title="Abe"
        items={[
          "Japanischer Judoka",
          "Olympiasieger",
          "Bekannt für seine Technikvielfalt",
        ]}
      />
    </div>
  );
}

export default App;
