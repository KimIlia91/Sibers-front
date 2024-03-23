import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
    return (
      <Link href="" className="relative w-[340px] sm:w-[370px] h-[200px] border-2 border-black rounded-2xl p-6 overflow-hidden z-10">
        <h3 className=" text-center text-xl text-black">
          Название проекта
        </h3>
        <div className="absolute w-full h-10 bottom-0 left-0 flex justify-between items-center p-7 z-20">
          <button>
            <Image src="/images/trash.svg" alt="trash" height={20} width={20} />
          </button>
          <p className=" text-black">Начало 20.05.2024</p>
        </div>
        <div className=" bg-black opacity-10 w-full h-10 absolute bottom-0 left-0 p-7 z-10"></div>
        <Image src="/images/project-card.png" alt="project image" width={370} height={200} 
          className=" absolute w-full h-full top-0 left-0 opacity-50 -z-10" 
        />
      </Link>
    )
}

export default ProjectCard;