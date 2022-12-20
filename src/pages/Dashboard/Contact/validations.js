import { object, string } from "yup";

const required_error = "Bu alanın girilmesi zorunludur.";
const contactSchema = object({
  firstName: string().required(required_error),
  lastName: string().required(required_error),
  message: string()
    .min(5, "En az 5 karakter giriniz.")
    .required(required_error),
  email: string()
    .email("Geçerli bir mail adresi giriniz.")
    .required(required_error),
});
export default contactSchema;
