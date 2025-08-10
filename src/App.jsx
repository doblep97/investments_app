import "./index.css";
import AddInvestmentForm from "./components/AddInvestmentsForm";
import TotalInvestments from "./components/TotalInvestments";
import InvestmentsGraphic from "./components/InvestmentsGraphic";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import TableInvestments from "./components/TableInvestments";

const initialStateInvestements =
  JSON.parse(localStorage.getItem("investements")) || [];

const App = () => {
  const [investments, setInvestments] = useState(initialStateInvestements);

  // Función (handler) que se ejecuta cada vez que se envía el formulario con una inversión nueva
  const handleAddInvestment = (newInvestment) => {
    // Función que recibe el estado anterior, es decir, todas las inversiones que ya estaban
    // Creamos un nuevo array que copia todo lo que había (...previous) y añade al final la nueva inversión
    // TODO Calcular tu rendimiento y obtienes ej: 233 -->
    // newInvestment.rendimiento = 233
    const totalProfit = investments.reduce((acumulador, inv) => {
      let localProfit = Number(inv.profit);
      return acumulador + (isNaN(localProfit) ? 0 : localProfit);
    }, 0);
    setInvestments((previous) => {
      const lastTotalProfit = totalProfit + newInvestment.profit;
      const newInvestmentModify = {
        ...newInvestment,
        actualProfit: lastTotalProfit,
      };
      return [...previous, newInvestmentModify];
    });
  };

  useEffect(() => {
    localStorage.setItem("investements", JSON.stringify(investments));
    console.log(investments);
  }, [investments]);

  return (
    <Box sx={{ backgroundColor: "#b9e9ed", py: 3 }}>
      <Box
        sx={{
          maxWidth: "90%",
          marginX: "auto",
          backgroundColor: "white",
          p: 2,
          borderRadius: 2,
        }}
      >
        <Box sx={{ borderBottom: "2px solid black", paddingBottom: 1 }}>
          <TotalInvestments investments={investments} />
          <InvestmentsGraphic investments={investments} />
        </Box>
        <Box sx={{ borderBottom: "2px solid black", marginTop: 1 }}>
          <AddInvestmentForm onAddInvestment={handleAddInvestment} />
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <TableInvestments investments={investments} />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
