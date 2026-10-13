import "./App.css";
import Card from "./components/Card";
import InfoList from "./components/InfoList";

function App() {
  return (
    <div className="page">
      <h1>Judoka</h1>

      <div className="card-row">
        <Card title="Iliadis" text="Olympic Gold at 17" image="https://media.cnn.com/api/v1/images/stellar/prod/180423132121-ilias-iliadis-of-greece-judo.jpg?q=x_4,y_182,h_1967,w_3496,c_crop" />
        <Card title="Bekauri" text="The Golden Lion" image="https://tse1.mm.bing.net/th/id/OIP.Q7Ufh0kZaSBTt4P8A3OI2AHaEu?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Card title="Maruyama" text="The Ippon Artist" image="https://res.cloudinary.com/duu3v9gfg/image/fetch/t_fit_1920/https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2022/10/day_2_7_10_133-1665138971-1665138971.jpg" />
        <Card title="Grigalashvili" text="The Georgian Warrior" image="https://res.cloudinary.com/duu3v9gfg/image/fetch/t_fit_1920/https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2026/10/KUL_5924-1791388646-1791388646.jpg" />
      </div>

      <InfoList title="Iliadis" />
      <InfoList title="Riner" />
      <InfoList title="Ono " />
      <InfoList title="Abe" />
      <InfoList title="Agbegnenou" />
      <InfoList title="Teddy" />
    </div>
  );
}

export default App;
