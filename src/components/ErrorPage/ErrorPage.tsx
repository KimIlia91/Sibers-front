import Link from "next/link"

const ErrorPage = ()=>{
    return(
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-[10px]">
            <h1 className="text-[32px] font-bold ">Not Founded</h1>
            <Link className="text-[18px] hover:underline hover:transition-all hover:duration-300" href={'/'}>go homePage</Link>
        </div>
    )
}
export default ErrorPage