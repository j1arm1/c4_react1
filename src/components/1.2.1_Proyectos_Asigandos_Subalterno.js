
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProyectlistItem from "./ProyectListItem";
import Paginator from "./Paginator";


function ActividadesSubalterno(props) {

  const vProyectos = props.proyectos;
  const listaProyectos = vProyectos.map(p =>
    <ProyectlistItem
      id={p.id}
      nombre={p.nombre}
      descripcion={p.descripcion}
      fecha={p.fecha}
    />
  );

  return (
    <div className="container">
      <div className="card mt-lg-5">
        <div className="card-body">
          <h3>Proyectos Asignados al Usuario Subalterno</h3>
          <h5 className="text-muted"></h5>
        </div>
      </div>
      <div className="list-group mt-lg-5">
        {listaProyectos}
      </div>
      <Paginator />
    </div>
  );
}

export default ActividadesSubalterno;