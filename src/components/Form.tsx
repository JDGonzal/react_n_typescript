import { ChangeEvent, useState } from "react";

export const Form = () => {
  const [form, setForm] = useState({
    email: "",
    nombre: "",
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // console.log(`${target.name}: ${target.value}`);
    const { name, value } = target;
    // console.log(`${name}: ${value}`);
    setForm({ ...form, [name]: value });
  };

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};
