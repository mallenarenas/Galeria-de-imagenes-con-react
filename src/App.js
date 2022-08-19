import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
//import Cards from "./components/Cards";

function App() {
return (
<div>
<Header title="Galería de Imágenes con React "/>
<div className="container">
    <Card title= "Boby" url="https://placedog.net/300/302" description="Busco familia, me comporto bien con los niños" />
    <Card title= "Damita" url="https://placedog.net/300/304" description="Necesito familia que me adopte, necesito un amplio terreno" />
    <Card title= "Yoyo" url="https://placedog.net/300/306" description="¿Me adoptas? soy muy tranquilo" />
    <Card title= "Nala" url="https://placedog.net/300/308" description="Busco familia" />
    <Card title= "Kiara" url="https://placedog.net/300/310" description="¿Me adoptas?" />
    <Card title= "Cachupín" url="https://placedog.net/300/312" description="Soy muy juguetón, necesito casa con patio" />
</div>
<Footer />
</div>
);
}
export default App;
