import {
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  OutlinedInput,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useState } from "react";

const AddInvestmentForm = ({ onAddInvestment }) => {
  //Dia actual para el valor por defecto de la fecha
  let getToday = () => new Date().toISOString().split("T")[0];

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(getToday());
  const [amount, setAmount] = useState("");
  const [actualValue, setActualValue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const resetForm = () => {
    setName("");
    setCategory("");
    setDate(getToday());
    setActualValue("");
    setAmount("");
  };

  const dataForm = {
    name: name.trim(),
    category: category,
    date: date,
    amount: parseFloat(amount.trim()),
    actualValue: parseFloat(actualValue.trim()),
    id: Date.now(),
    profit: Number(
      (parseFloat(actualValue.trim()) - parseFloat(amount.trim())).toFixed(2)
    ),
  };

  const handleChangeAmount = (event) => {
    let value = event.target.value;
    //Reemplaza la "," por el "."
    value = value.replace(",", ".");

    //Elimina letras y símbolos no permitidos (excepto punto y números)
    value = value.replace(/[^0-9.]/g, "");

    if (!isNaN(value) || value === "") {
      setAmount(value);
    }
  };

  const handleChangeActualValue = (event) => {
    let value = event.target.value;
    value = value.replace(",", ".");
    value = value.replace(/[^0-9.]/g, "");
    if (!isNaN(value) || value === "") {
      setActualValue(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (
      !dataForm.name ||
      !dataForm.date ||
      !dataForm.category ||
      !dataForm.amount ||
      !dataForm.actualValue
    ) {
      return;
    }

    //Reseteo el formulario desde una función
    resetForm();
    //Borro los errores
    setFormSubmitted(false);
    //Envio la prop al app.jsx
    onAddInvestment(dataForm);
  };

  return (
    <>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Añadir nueva inversión
      </Typography>
      <Box component={"form"} onSubmit={handleSubmit}>
        <Box display={"flex"} sx={{ gap: 1, marginBottom: 2 }}>
          <TextField
            label="Nombre del activo"
            size="small"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={formSubmitted && name.trim() === ""}
            helperText={
              formSubmitted && name.trim() === ""
                ? "Este campo es obligatorio"
                : ""
            }
            sx={{ flexBasis: "30%" }}
          />
          <FormControl
            sx={{ flexBasis: "35%" }}
            size="small"
            error={formSubmitted && category === ""}
          >
            <InputLabel id="select-categoria">Categoría del activo</InputLabel>
            <Select
              labelId="select-categoria"
              id="select-categoria"
              label="Categoría del activo"
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <MenuItem value={"Acciones"}>Acciones</MenuItem>
              <MenuItem value={"Criptomonedas"}>Criptomonedas</MenuItem>
              <MenuItem value={"Fondo de inversión"}>
                Fondo de inversión
              </MenuItem>
              <MenuItem value={"ETFs"}>ETFs</MenuItem>
              <MenuItem value={"Bonos"}>Bonos</MenuItem>
              <MenuItem value={"Inmuebles"}>Inmuebles</MenuItem>
              <MenuItem value={"Cuenta remunerada"}>Cuenta remunerada</MenuItem>
              <MenuItem value={"Depósito bancario"}>Depósito bancario</MenuItem>
              <MenuItem value={"Otros"}>Otros</MenuItem>
            </Select>
            {formSubmitted && category === "" && (
              <Typography variant="caption" color="error">
                Este campo es obligatorio
              </Typography>
            )}
          </FormControl>

          <TextField
            type={"date"}
            name="date"
            label="Fecha de venta de la inversión"
            sx={{ flexBasis: "35%" }}
            InputLabelProps={{ shrink: true }}
            size="small"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            error={formSubmitted && date === ""}
            helperText={
              formSubmitted && date === "" ? "Este campo es obligatorio" : ""
            }
          />
        </Box>
        <Box display={"flex"} sx={{ gap: 1 }}>
          <FormControl
            size="small"
            sx={{ marginBottom: 2, flexBasis: "53%" }}
            error={formSubmitted && amount.trim() === ""}
          >
            <InputLabel htmlFor="amount">Cantidad invertida</InputLabel>
            <OutlinedInput
              id="amount"
              endAdornment={<InputAdornment position="start">€</InputAdornment>}
              label="Cantidad invertida"
              name="amount"
              value={amount}
              onChange={handleChangeAmount}
            />
            {formSubmitted && amount.trim() === "" && (
              <Typography variant="caption" color="error">
                Este campo es obligatorio
              </Typography>
            )}
          </FormControl>

          <FormControl
            size="small"
            sx={{ marginBottom: 2, flexBasis: "70%" }}
            error={formSubmitted && actualValue.trim() === ""}
          >
            <InputLabel htmlFor="actualValue">
              Valor actual de la inversión
            </InputLabel>
            <OutlinedInput
              id="actualValue"
              endAdornment={<InputAdornment position="start">€</InputAdornment>}
              label="Valor actual de la inversión"
              name="actualValue"
              value={actualValue}
              onChange={handleChangeActualValue}
            />
            {formSubmitted && actualValue.trim() === "" && (
              <Typography variant="caption" color="error">
                Este campo es obligatorio
              </Typography>
            )}
          </FormControl>

          <Box sx={{ display: "flex", mb: 2 }}>
            <Button type="submit" size="small" variant="contained">
              Añadir
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddInvestmentForm;
