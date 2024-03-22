import Form from "@/components/common/from/Form";
import Input from "@/components/common/from/Input";
import PasswordInput from "@/components/common/from/PasswordInput";

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">
          Вход
        </h1>
        <Form />
      </div>
    </section>
  );
}
