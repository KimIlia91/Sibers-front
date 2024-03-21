import Input from "@/components/common/from/Input";
import PasswordInput from "@/components/common/from/PasswordInput";

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl">
          Вход
        </h2>
        <form action="POST" className="flex flex-col items-center gap-4 pt-8">
          <Input type="email" placeholder="Email" />
          <PasswordInput />
          <button 
              className="
                rounded-xl border-black border-2 font-medium text-xl 
                px-12 py-2 hover:bg-gray-200 transition-all mt-16 max-w-[165px]
              "
            >
              Войти
            </button>
        </form>
      </div>
    </section>
  );
}
