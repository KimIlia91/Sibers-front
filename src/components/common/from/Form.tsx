import Input from './Input'
import PasswordInput from './PasswordInput'

const Form = () => {
  return (
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
  )
}

export default Form