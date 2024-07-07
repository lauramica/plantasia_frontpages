import { Link } from "react-router-dom";
import "../css/Loader.css";

function PurchasingModal() {
  const loading = false;

  return (
    <div className="purchasing-modal">
      <div className="block shadow p-5">
        <h3 className="proxima-nova-bold darkgreen mb-5">
          {loading ? "Estamos procesando tu Compra" : "Compra procesada con éxito"}
        </h3>
        {loading ? (
          <span className="flower-loader"></span>
        ) : (
          <div className="links">
            <Link to={"/products"} className="continue proxima-nova-regular darkgreen fs-5">
              Continuar Comprando
            </Link>
            <button className="shadow proxima-nova-regular">Ver Orden</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PurchasingModal;
