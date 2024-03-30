import Card from "../Components/Card";
import { useTheme } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { theme } = useTheme();
  const favs = JSON.parse(localStorage.getItem("items"));

  return (
    <div className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs && favs.map( fav => <Card key={fav.id} item={fav} />)}
      </div>
    </div>
  );
};

export default Favs;
