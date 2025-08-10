import { Typography } from "@mui/material";

const TotalInvestments = ({ investments = [] }) => {
  const totalProfit = investments.reduce((acumulador, inv) => {
    let localProfit = Number(inv.profit);
    return acumulador + (isNaN(localProfit) ? 0 : localProfit);
  }, 0);

  const icon = totalProfit > 0 ? "+" : "";

  return (
    <>
      <Typography variant="h5" component="h2">
        Panel de seguimiento de finanzas personales
      </Typography>
      <Typography variant="subtitle1" component="h2">
        Rendimiento total acumulado
      </Typography>
      <Typography
        variant="h4"
        component="h2"
        sx={{ color: totalProfit >= 0 ? "green" : "red" }}
      >
        {`${icon}${totalProfit.toFixed(2)} €`}
      </Typography>
    </>
  );
};

export default TotalInvestments;
