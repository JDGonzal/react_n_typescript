import { useForm } from "../hooks/useForm";

interface FormData {
  poBox: string;
  city: string;
}

export const Form2 = () => {
  const { form, handleChange } = useForm<FormData>({
    poBox: "",
    city: "",
  });
  
  const {poBox, city}=form;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Código Postal:</label>
        <input
          type="poBox"
          className="form-control"
          name="poBox"
          value={poBox}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ciudad:</label>
        <input
          type="text"
          className="form-control"
          name="city"
          value={city}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};
