import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute w-full h-20 flex items-center justify-center">
        <div className="flex justify-around gap-28 items-center">
        <p className="font-bold text-4xl">Logo</p>
        <div className="flex gap-14">
            <Link href="" className="text-xl hover:underline hover:transition-all hover:duration-300">Cоздать заявку на проект</Link>
            <Link href="" className="text-xl hover:underline hover:transition-all hover:duration-300">Мои проекты</Link> 
        </div>
        <div className="flex gap-x-10 items-center">
            <Link href="" className="text-xl hover:underline hover:transition-all hover:duration-300">Войти</Link>
            <button className="rounded-xl border-black border-2 font-medium text-xl px-8 py-2 hover:bg-gray-200 transition-all">Зарегистрироваться</button>
        </div>
        </div>
    </header>
  )
}

export default Header