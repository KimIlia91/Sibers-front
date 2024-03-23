import FormLogin from "@/components/common/from/FormLogin";

const LoginPage = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">Вход</h1>
        <FormLogin />
      </div>
    </section>
  );
};
export default LoginPage;
