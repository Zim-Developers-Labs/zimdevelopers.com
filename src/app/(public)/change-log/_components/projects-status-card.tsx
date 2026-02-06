import Link from "next/link";
import { cn } from "@/lib/utils";
import projectsStatus from "../../../../../content/projects-status.json";
import {
  CircleDotIcon,
  ExternalLinkIcon,
  HammerIcon,
  LoaderCircleIcon,
  MessageSquareIcon,
  RocketIcon,
} from "lucide-react";

type ProjectStatus = {
  project: string;
  description: string;
  status:
    | "Recently Started"
    | "Halfway through"
    | "Almost Done"
    | "Collect User Feedback";
  currentWork: string;
  tryUrl: string | null;
};

const statusConfig: Record<
  ProjectStatus["status"],
  { icon: React.ElementType; color: string; bg: string; progressWidth: string }
> = {
  "Recently Started": {
    icon: CircleDotIcon,
    color: "text-zinc-500",
    bg: "bg-zinc-100",
    progressWidth: "w-1/5",
  },
  "Halfway through": {
    icon: LoaderCircleIcon,
    color: "text-teal-600",
    bg: "bg-teal-50",
    progressWidth: "w-1/2",
  },
  "Almost Done": {
    icon: RocketIcon,
    color: "text-teal-700",
    bg: "bg-teal-50",
    progressWidth: "w-4/5",
  },
  "Collect User Feedback": {
    icon: MessageSquareIcon,
    color: "text-amber-600",
    bg: "bg-amber-50",
    progressWidth: "w-full",
  },
};

export function ProjectsStatusCard() {
  const projects = projectsStatus as ProjectStatus[];

  return (
    <div className="rounded-xl border border-zinc-200 bg-white">
      <div className="flex items-center gap-2 border-b border-zinc-100 px-5 py-4">
        <HammerIcon className="size-4 text-teal-600" />
        <h2 className="text-sm font-semibold text-zinc-900">
          Currently Being Worked On
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-px bg-zinc-100 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const config = statusConfig[project.status];
          const StatusIcon = config.icon;

          return (
            <div
              key={project.project}
              className="flex flex-col justify-between bg-white p-5"
            >
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-medium text-zinc-900">
                    {project.project}
                  </h3>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                      config.bg,
                      config.color
                    )}
                  >
                    <StatusIcon className="size-3" />
                    {project.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-400">
                  {project.currentWork}
                </p>
              </div>

              <div className="mt-4">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      config.progressWidth,
                      project.status === "Collect User Feedback"
                        ? "bg-amber-400"
                        : "bg-teal-500"
                    )}
                  />
                </div>

                {project.status === "Collect User Feedback" &&
                  project.tryUrl && (
                    <Link
                      href={project.tryUrl}
                      target="_blank"
                      className="mt-3 inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
                    >
                      Try It Out
                      <ExternalLinkIcon className="size-3" />
                    </Link>
                  )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
