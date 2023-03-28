import { ChangeEvent, useState } from "react";

export const useForm = ( initState: any ) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // console.log(`${target.name}: ${target.value}`);
    const { name, value } = target;
    // console.log(`${name}: ${value}`);
    setForm({ ...form, [name]: value });
  };
  return {form, handleChange};
}
