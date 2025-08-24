import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const TableInvestments = ({ investments }) => {
  if (investments.length === 0) return null;
  return (
    <>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Todas las inversiones
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#e6f9fbff" }}>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Activo
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Categoría
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Cantidad invertida
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Valor actual
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Rendimiento
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Fecha de inversión
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {investments.map((inv) => (
              <TableRow
                key={inv.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {inv.name}
                </TableCell>
                <TableCell align="center">{inv.category}</TableCell>
                <TableCell align="center">{`${inv.amount} €`}</TableCell>
                <TableCell align="center">{`${inv.actualValue} €`}</TableCell>
                <TableCell align="center">{`${inv.profit} €`}</TableCell>
                <TableCell align="center">{inv.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableInvestments;
