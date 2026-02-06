"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import projectsStatus from "../../../../../content/projects-status.json";
import {
  CircleDotIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  HammerIcon,
  LoaderCircleIcon,
  MessageSquareIcon,
  RocketIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
  {
    icon: React.ElementType;
    color: string;
    bg: string;
    barColor: string;
    progressWidth: string;
    overviewBg: string;
    overviewText: string;
    overviewCountBg: string;
    overviewCountText: string;
  }
> = {
  "Recently Started": {
    icon: CircleDotIcon,
    color: "text-zinc-400",
    bg: "bg-zinc-800",
    barColor: "bg-zinc-500",
    progressWidth: "w-1/5",
    overviewBg: "bg-zinc-100",
    overviewText: "text-zinc-600",
    overviewCountBg: "bg-zinc-200",
    overviewCountText: "text-zinc-700",
  },
  "Halfway through": {
    icon: LoaderCircleIcon,
    color: "text-teal-400",
    bg: "bg-teal-950",
    barColor: "bg-teal-500",
    progressWidth: "w-1/2",
    overviewBg: "bg-teal-50",
    overviewText: "text-teal-700",
    overviewCountBg: "bg-teal-200",
    overviewCountText: "text-teal-800",
  },
  "Almost Done": {
    icon: RocketIcon,
    color: "text-teal-300",
    bg: "bg-teal-950",
    barColor: "bg-teal-400",
    progressWidth: "w-4/5",
    overviewBg: "bg-teal-50",
    overviewText: "text-teal-600",
    overviewCountBg: "bg-teal-200",
    overviewCountText: "text-teal-800",
  },
  "Collect User Feedback": {
    icon: MessageSquareIcon,
    color: "text-amber-400",
    bg: "bg-amber-950",
    barColor: "bg-amber-400",
    progressWidth: "w-full",
    overviewBg: "bg-amber-50",
    overviewText: "text-amber-700",
    overviewCountBg: "bg-amber-200",
    overviewCountText: "text-amber-800",
  },
};

export function ProjectsStatusCard() {
  const [open, setOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const projects = projectsStatus as ProjectStatus[];

  function handleToggle(projectName: string) {
    setExpandedProject((prev) => (prev === projectName ? null : projectName));
  }

  const statusCounts = {
    "Recently Started": 0,
    "Halfway through": 0,
    "Almost Done": 0,
    "Collect User Feedback": 0,
  } as Record<ProjectStatus["status"], number>;

  for (const p of projects) {
    statusCounts[p.status]++;
  }

  const statuses: ProjectStatus["status"][] = [
    "Recently Started",
    "Halfway through",
    "Almost Done",
    "Collect User Feedback",
  ];

  return (
    <>
      <div>
        <button
          onClick={() => setOpen(true)}
          className="group flex w-full cursor-pointer items-center gap-3 rounded-t-lg bg-zinc-900 px-4 py-3 text-left transition-colors hover:bg-zinc-800"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-zinc-800 text-teal-400 transition-colors group-hover:bg-zinc-700">
            <HammerIcon className="size-4" />
          </span>
          <span className="flex flex-1 flex-col">
            <span className="text-sm font-medium text-zinc-100">
              Currently Being Worked On
            </span>
            <span className="text-xs text-zinc-500">
              {projects.length} active projects
            </span>
          </span>
          <ChevronDownIcon className="size-4 text-zinc-500 transition-transform group-hover:text-zinc-400" />
        </button>

        <div className="flex flex-wrap items-center gap-2 rounded-b-lg border-x border-b border-zinc-200 px-4 py-2.5">
          {statuses.map((status) => {
            const config = statusConfig[status];
            const count = statusCounts[status];

            return (
              <span
                key={status}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium",
                  config.overviewBg,
                  config.overviewText
                )}
              >
                {status}
                <span
                  className={cn(
                    "flex size-4 items-center justify-center rounded-full text-[10px] font-semibold",
                    config.overviewCountBg,
                    config.overviewCountText
                  )}
                >
                  {count}
                </span>
              </span>
            );
          })}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="scrollbar-dark max-h-[85vh] overflow-y-auto border-zinc-800 bg-zinc-950 p-0 sm:max-w-lg"
        >
          <DialogHeader className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950 px-5 pt-5 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-md bg-zinc-800 text-teal-400">
                  <HammerIcon className="size-3.5" />
                </span>
                <DialogTitle className="text-sm font-semibold text-zinc-100">
                  Currently Being Worked On
                </DialogTitle>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex size-7 cursor-pointer items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-300"
              >
                <span className="sr-only">Close</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
            </div>
            <DialogDescription className="mt-1 text-xs text-zinc-500">
              Progress across all Zim Developers projects
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col px-3 pb-3">
            {projects.map((project) => {
              const config = statusConfig[project.status];
              const StatusIcon = config.icon;
              const isExpanded = expandedProject === project.project;

              return (
                <Collapsible
                  key={project.project}
                  open={isExpanded}
                  onOpenChange={() => handleToggle(project.project)}
                >
                  <CollapsibleTrigger className="group/item flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-3 text-left transition-colors hover:bg-zinc-900">
                    <div className="flex flex-1 items-center gap-3">
                      <span className="text-sm font-medium text-zinc-200">
                        {project.project}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium",
                          config.bg,
                          config.color
                        )}
                      >
                        <StatusIcon className="size-2.5" />
                        {project.status}
                      </span>
                    </div>
                    <ChevronDownIcon
                      className={cn(
                        "size-3.5 text-zinc-600 transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="mb-1 ml-3 rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
                      <p className="text-xs text-zinc-500">
                        {project.currentWork}
                      </p>

                      <div className="mt-3">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all",
                              config.progressWidth,
                              config.barColor
                            )}
                          />
                        </div>
                      </div>

                      {project.status === "Collect User Feedback" &&
                        project.tryUrl && (
                          <Link
                            href={project.tryUrl}
                            target="_blank"
                            className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-700"
                          >
                            Try It Out
                            <ExternalLinkIcon className="size-3" />
                          </Link>
                        )}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
