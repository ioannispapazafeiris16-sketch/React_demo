import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import InfoList from "./components/InfoList";
import CountBackwards from "./components/countbackwards";
import School from "./components/School";

function App() {
  return (
    <div className="page">
      <Header />
      <Content />

      <CountBackwards start={100} />

      <School name="HTL Dornbirn" subjects={["Mathe", "Englisch", "Deutsch"]} />
      <School name="HAK Bregenz" subjects={["BWL", "Englisch", "Rechnungswesen"]} />

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
