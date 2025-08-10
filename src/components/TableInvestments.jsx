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
          <TableHead>
            <TableRow>
              <TableCell>Activo</TableCell>
              <TableCell align="center">Categoría</TableCell>
              <TableCell align="center">Cantidad invertida</TableCell>
              <TableCell align="center">Valor actual</TableCell>
              <TableCell align="center">Rendimiento</TableCell>
              <TableCell align="center">Fecha de inversión</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {investments.map((inv) => (
              <TableRow
                key={inv.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
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
