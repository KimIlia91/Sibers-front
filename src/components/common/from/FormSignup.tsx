"use client";
import { FormEvent, useEffect } from "react";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ISignup } from "@/models/ISignup";
import { createUser } from "@/utils/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/currentUserSlise/currentUserSlice";
import { addLocalstorage } from "@/utils/localStorage";

const schema = yup
  .object({
    email: yup
      .string()
      .required("заполните поле email")
      .email("поле должно быть email"),
    firstName: yup.string().required("заполните поле имя"),
    lastName: yup.string().required("заполните поле фамилия"),
    surname: yup.string(),
    password: yup
      .string()
      .required("заполните поле password")
      .min(6, "пароль должен быть больше 6 символов"),
  })
  .required();

const FormSignup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignup | any>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<ISignup> = async (data) => {
    const response = await createUser(data);
    const user = await response.json();
    dispatch(setUser(user));
    localStorage.setItem("currentUser", JSON.stringify(user));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4 pt-8"
    >
      <Input reg={{ ...register("firstName") }} type="text" placeholder="Имя" />
      <p className=" self-start -mt-[15px] text-[red]">
        {errors && errors.firstName?.message}
      </p>
      <Input
        reg={{ ...register("lastName") }}
        type="text"
        placeholder="Фамилия"
      />
      <p className=" self-start -mt-[15px] text-[red]">
        {errors && errors.lastName?.message}
      </p>
      <Input
        reg={{ ...register("surname") }}
        type="text"
        placeholder="Отчество"
      />
      <Input reg={{ ...register("email") }} type="email" placeholder="Email" />
      <p className=" self-start -mt-[15px] text-[red]">
        {errors && errors.email?.message}
      </p>
      <PasswordInput reg={register} />
      <p className=" self-start -mt-[15px] text-[red]">
        {errors && errors.password?.message}
      </p>

      <button
        type="submit"
        className="
            rounded-xl border-black border-2 font-medium text-xl 
            px-12 py-2 hover:bg-gray-200 transition-all mt-16
            "
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default FormSignup;
