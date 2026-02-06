import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import changes from "../../../../../content/changes.json";
import {
  ArrowRightIcon,
  SparklesIcon,
  WrenchIcon,
  BugIcon,
} from "lucide-react";

type ChangeEntry = {
  id: string;
  project: string;
  title: string;
  description: string;
  date: string;
  type: "feature" | "improvement" | "fix";
  ctaLabel: string | null;
  ctaUrl: string | null;
  image: string | null;
};

const typeConfig: Record<
  ChangeEntry["type"],
  { label: string; icon: React.ElementType; color: string; bg: string; dot: string }
> = {
  feature: {
    label: "Feature",
    icon: SparklesIcon,
    color: "text-teal-700",
    bg: "bg-teal-50",
    dot: "bg-teal-500",
  },
  improvement: {
    label: "Improvement",
    icon: WrenchIcon,
    color: "text-blue-700",
    bg: "bg-blue-50",
    dot: "bg-blue-500",
  },
  fix: {
    label: "Fix",
    icon: BugIcon,
    color: "text-amber-700",
    bg: "bg-amber-50",
    dot: "bg-amber-500",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ChangeLogList() {
  const entries = changes as ChangeEntry[];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute top-0 bottom-0 left-[7px] w-px bg-zinc-200 sm:left-[119px]" />

      <div className="flex flex-col gap-0">
        {entries.map((entry, index) => {
          const config = typeConfig[entry.type];
          const TypeIcon = config.icon;
          const isExternal = entry.ctaUrl?.startsWith("http");

          return (
            <div key={entry.id} className="relative flex gap-6 pb-8 sm:gap-8">
              {/* Date column - hidden on mobile, shown on sm+ */}
              <div className="hidden w-[100px] shrink-0 pt-1 text-right sm:block">
                <span className="text-xs text-zinc-400">
                  {formatDate(entry.date)}
                </span>
              </div>

              {/* Timeline dot */}
              <div className="relative z-10 mt-1.5 flex shrink-0">
                <div
                  className={cn(
                    "size-3.5 rounded-full border-2 border-white",
                    config.dot
                  )}
                />
              </div>

              {/* Card */}
              <div
                className={cn(
                  "group flex-1 rounded-lg border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300",
                  index === 0 && "border-teal-200 bg-teal-50/30 hover:border-teal-300"
                )}
              >
                {/* Mobile date */}
                <span className="mb-2 block text-xs text-zinc-400 sm:hidden">
                  {formatDate(entry.date)}
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-zinc-500">
                    {entry.project}
                  </span>
                  <span className="text-zinc-300">{"/"}</span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                      config.bg,
                      config.color
                    )}
                  >
                    <TypeIcon className="size-3" />
                    {config.label}
                  </span>
                </div>

                <h3 className="mt-2 text-sm font-semibold text-zinc-900">
                  {entry.title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                  {entry.description}
                </p>

                {entry.image && (
                  <div className="mt-4 overflow-hidden rounded-md border border-zinc-200">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      width={600}
                      height={300}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )}

                {entry.ctaLabel && entry.ctaUrl && (
                  <Link
                    href={entry.ctaUrl}
                    target={isExternal ? "_blank" : undefined}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                  >
                    {entry.ctaLabel}
                    <ArrowRightIcon className="size-3" />
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
