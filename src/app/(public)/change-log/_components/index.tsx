import Container from "@/components/container";
import Link from "next/link";
import { ProjectsStatusCard } from "./projects-status-card";
import { ChangeLogList } from "./change-log-list";

export default function ChangeLogPageComponents() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
        <Container className="py-6">
          <h1 className="mb-4 text-4xl font-semibold">Change Log</h1>

          <p className="text-zinc-500">
            Stay up to date with changes across all{" "}
            <Link href="/projects" className="text-teal-600 hover:underline">
              Zim Developers Labs Projects
            </Link>
            .
          </p>
        </Container>
        <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      </div>
      <Container className="py-10">
        <ProjectsStatusCard />
        <div className="mt-6">
          <h2 className="mb-6 text-lg font-semibold text-zinc-900">
            Recent Changes
          </h2>
          <ChangeLogList />
        </div>
      </Container>
    </>
  );
}
