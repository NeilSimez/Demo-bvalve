import { Book, FileText, Tag, Truck } from "lucide-react";
import CardSummary from "../components/CardSummary/CardSummary";

export default function MainPage() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <CardSummary
          icon={FileText}
          total="12.450"
          average={15}
          title={"Generar cotización"}
          tooltiptext={"Ver/crear cotización"}
        />
        <CardSummary
          icon={Tag}
          total="12.450"
          average={15}
          title={"Lista de precios"}
          tooltiptext={"Ver lista de precios"}
        />
        <CardSummary
          icon={Book}
          total="12.450"
          average={15}
          title={"Catalogo"}
          tooltiptext={"Ver catalogo"}
        />
        <CardSummary
          icon={Truck}
          total="12.450"
          average={15}
          title={"Proveedores"}
          tooltiptext={"Ver todos los proveedores"}
        />
      </div>
    </div>
  );
}
