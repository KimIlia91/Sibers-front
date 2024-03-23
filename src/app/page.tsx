import ProjectTable from "@/components/project/ProjectTable";

export default function Home() {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center gap-9">
        <h1 className="font-bold text-2xl">
          Проекты
        </h1>
        <ProjectTable />
      </div>
      
    </section>
  );
}