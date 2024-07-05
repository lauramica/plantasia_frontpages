import "../css/Loader.css";

function PurchasingModal() {
  return (
    <div>
      <h3>{loading ? "Estamos procesando tu Compra" : "Compra procesada con éxito"}</h3>
      <span className="flower-loader"></span>
    </div>
  );
}

export default PurchasingModal;
