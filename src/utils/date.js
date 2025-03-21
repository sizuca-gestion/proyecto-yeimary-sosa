import { format } from "date-fns";
import { es } from "date-fns/locale";

export function formatDate(date, formatString) {
  return format(date, formatString, { locale: es }).toUpperCase();
}

export function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
