import { ChangeEvent, useState } from "react";

// export function useForm<T> (initState:T){
export const useForm = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // console.log(`${target.name}: ${target.value}`);
    const { name, value } = target;
    // console.log(`${name}: ${value}`);
    setForm({ ...form, [name]: value });
  };
  return { form, handleChange, ...form };
};
