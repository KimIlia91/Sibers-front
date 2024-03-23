"use client";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ILogin } from "@/models/ILogin";
import { loginUser } from "@/utils/fetchData";
import { setUser } from "@/store/currentUserSlise/currentUserSlice";
import { useDispatch } from "react-redux";
import { IAuthResponse } from "@/models/IAuthResponse";
import { addLocalstorage } from "@/utils/localStorage";
import { useEffect, useState } from "react";

const schema = yup
  .object({
    email: yup
      .string()
      .required("заполните поле email")
      .email("поле должно быть email"),
    password: yup
      .string()
      .required("заполните поле password")
      .min(6, "пароль должен быть больше 6 символов"),
  })
  .required();
const FormLogin = () => {
  const dispatch = useDispatch();
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILogin | any>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    try {
      const response = await loginUser(data);
      const user = await response.json();
      if (response.status === 401) {
        alert(user?.title);
        return 0;
      }
      dispatch(setUser(user));
      localStorage.setItem("currentUser", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4 pt-8"
    >
      <Input reg={{ ...register("email") }} type="email" placeholder="Email" />
      <p className=" self-start -mt-[15px] text-[red]">
        {errors && errors.email?.message}
      </p>
      <PasswordInput reg={register} />
      <p className=" self-start -mt-[15px] text-[red]">
        {errors && errors.password?.message}
      </p>
      <button
        className="
            rounded-xl border-black border-2 font-medium text-xl 
            px-12 py-2 hover:bg-gray-200 transition-all mt-16 max-w-[165px]
            "
      >
        Войти
      </button>
    </form>
  );
};

export default FormLogin;
