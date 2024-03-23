"use client";
import Link from "next/link";
import { IAuthResponse } from "@/models/IAuthResponse";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetUser, setUser } from "@/store/currentUserSlise/currentUserSlice";

const Header = () => {
  const user = useSelector((state: RootState) => state.currentUser.value);
  const dispatch = useDispatch();
  function loadUser() {
    const locale = localStorage.getItem("currentUser");
    locale && dispatch(setUser(JSON.parse(locale)));
  }
  useEffect(() => {
    loadUser();
  }, []);

  const closeWithUser = (e: any) => {
    e.preventDefault();
    dispatch(resetUser());
    localStorage.clear();
  };
  return (
    <header className="w-full h-20 flex items-center justify-center">
      <div className="flex justify-around gap-28 items-center">
        <p className="font-bold text-4xl">Logo</p>
        <div className="flex gap-14">
          <Link
            href=""
            className="text-xl hover:underline hover:transition-all hover:duration-300"
          >
            Cоздать заявку на проект
          </Link>
          <Link
            href=""
            className="text-xl hover:underline hover:transition-all hover:duration-300"
          >
            Мои проекты
          </Link>
        </div>
        <div className="flex gap-x-10 items-center">
          {!user ? (
            <>
              <Link
                href="/login"
                className="text-xl hover:underline hover:transition-all hover:duration-300"
              >
                Войти
              </Link>
              <Link
                href="/signup"
                className="rounded-xl border-black border-2 font-medium text-xl px-8 py-2 hover:bg-gray-200 transition-all"
              >
                Зарегистрироваться
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="text-xl hover:underline hover:transition-all hover:duration-300"
                onClick={closeWithUser}
              >
                Выйти
              </Link>
              <Link href="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-4,21.164v-.164c0-2.206,1.794-4,4-4s4,1.794,4,4v.164c-1.226.537-2.578.836-4,.836s-2.774-.299-4-.836Zm9.925-1.113c-.456-2.859-2.939-5.051-5.925-5.051s-5.468,2.192-5.925,5.051c-2.47-1.823-4.075-4.753-4.075-8.051C2,6.486,6.486,2,12,2s10,4.486,10,10c0,3.298-1.605,6.228-4.075,8.051Zm-5.925-15.051c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z" />
                </svg>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
