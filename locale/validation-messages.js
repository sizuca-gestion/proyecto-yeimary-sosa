export const validationMessages = {
  required: "Este campo es requerido",
  min: (value) =>
    `Por favor, ingrese al menos ${value} ${
      value === 1 ? "caracter" : "caracteres"
    }`,
  max: (value) =>
    `Por favor, ingrese menos de ${value} ${
      value === 1 ? "caracter" : "caracteres"
    }`,
  email: "Este correo es inválido",
  number: "Este campo debe ser numérico",
  date: "Esta fecha es inválida",
  excelOnly: "Solo los formatos excel están soportados",
  slidesOnly: "Solo los formatos powerpoint están soportados",
};
