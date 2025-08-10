import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// Opcional: si quieres curva cardinal
// import { curveCardinal } from "d3-shape";
// const cardinal = curveCardinal.tension(0.2);

const InvestmentsGraphic = ({ investments }) => {
  //Si no hay ninguna inversión, no devuelve ningún gráfico
  if (investments.length === 0) return null;

  return (
    <div style={{ width: "100%", height: 200 }}>
      {/* altura explícita */}
      <ResponsiveContainer>
        <AreaChart
          data={investments}
          margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone" // o type={cardinal} si activas d3-shape
            dataKey="actualProfit" // <-- string, coincide con tu campo de investments
            stroke="#b9e9ed"
            fill="#b9e9ed"
            fillOpacity={0.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentsGraphic;
