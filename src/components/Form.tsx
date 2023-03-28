// import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad : number;
}

export const Form = () => {
  const { form, handleChange, email, nombre, edad } = useForm<FormData>({
    email: "",
    nombre: "",
    edad:18,
  });
  // const [form, setForm] = useState({
  //   email: "",
  //   nombre: "",
  // });

  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   // console.log(`${target.name}: ${target.value}`);
  //   const { name, value } = target;
  //   // console.log(`${name}: ${value}`);
  //   setForm({ ...form, [name]: value });
  // };

  // const {email, nombre, edad}=form;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          value={edad}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};
