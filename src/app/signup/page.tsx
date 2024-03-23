import FormSignup from "@/components/common/from/FormSignup";

const SignupPage = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">Регистрация</h1>
        <FormSignup />
      </div>
    </section>
  );
};
export default SignupPage;
