import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import changes from "../../../../../content/changes.json";
import {
  ArrowRightIcon,
  SparklesIcon,
  WrenchIcon,
  BugIcon,
  TrophyIcon,
} from "lucide-react";

type ChangeEntry = {
  id: string;
  project: string;
  title: string;
  description: string;
  date: string;
  type: "feature" | "improvement" | "fix" | "celebration";
  ctaLabel: string | null;
  ctaUrl: string | null;
  image: string | null;
};

const typeConfig: Record<
  ChangeEntry["type"],
  {
    label: string;
    icon: React.ElementType;
    color: string;
    bg: string;
    dot: string;
    solid?: boolean;
    solidBg?: string;
    solidBorder?: string;
  }
> = {
  celebration: {
    label: "Milestone",
    icon: TrophyIcon,
    color: "text-amber-200",
    bg: "bg-white/15",
    dot: "bg-zinc-900",
    solid: true,
    solidBg: "bg-zinc-900",
    solidBorder: "border-zinc-800",
  },
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
      <div className="flex flex-col gap-0">
        {entries.map((entry, index) => {
          const config = typeConfig[entry.type];
          const TypeIcon = config.icon;
          const isExternal = entry.ctaUrl?.startsWith("http");
          const isLast = index === entries.length - 1;
          const isCelebration = config.solid === true;

          return (
            <div key={entry.id} className="flex gap-4 sm:gap-6">
              {/* Date column - hidden on mobile */}
              <div className="hidden w-24 shrink-0 pt-1 text-right sm:block">
                <span className="text-xs text-zinc-400">
                  {formatDate(entry.date)}
                </span>
              </div>

              {/* Timeline gutter: dot + line */}
              <div className="relative flex w-3 shrink-0 flex-col items-center">
                <div
                  className={cn(
                    "z-10 mt-1.5 size-3 shrink-0 rounded-full border-2",
                    isCelebration
                      ? "border-zinc-900 ring-2 ring-zinc-300"
                      : "border-white",
                    config.dot
                  )}
                />
                {!isLast && (
                  <div className="w-px grow bg-zinc-200" />
                )}
              </div>

              {/* Card */}
              <div className="min-w-0 flex-1 pb-8">
                <div
                  className={cn(
                    "rounded-lg border p-5 transition-colors",
                    isCelebration
                      ? cn(config.solidBg, config.solidBorder, "hover:border-zinc-600")
                      : cn(
                          "border-zinc-200 bg-white hover:border-zinc-300",
                          index === 0 &&
                            !isCelebration &&
                            "border-teal-200 bg-teal-50/30 hover:border-teal-300"
                        )
                  )}
                >
                  {/* Mobile date */}
                  <span
                    className={cn(
                      "mb-2 block text-xs sm:hidden",
                      isCelebration ? "text-zinc-400" : "text-zinc-400"
                    )}
                  >
                    {formatDate(entry.date)}
                  </span>

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "text-xs font-medium",
                        isCelebration ? "text-zinc-400" : "text-zinc-500"
                      )}
                    >
                      {entry.project}
                    </span>
                    <span className={isCelebration ? "text-zinc-600" : "text-zinc-300"}>
                      {"/"}
                    </span>
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

                  <h3
                    className={cn(
                      "mt-2 text-sm font-semibold",
                      isCelebration ? "text-white" : "text-zinc-900"
                    )}
                  >
                    {entry.title}
                  </h3>

                  <p
                    className={cn(
                      "mt-1 text-sm leading-relaxed",
                      isCelebration ? "text-zinc-400" : "text-zinc-500"
                    )}
                  >
                    {entry.description}
                  </p>

                  {entry.image && (
                    <div
                      className={cn(
                        "mt-4 overflow-hidden rounded-md border",
                        isCelebration ? "border-zinc-700" : "border-zinc-200"
                      )}
                    >
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
                      className={cn(
                        "mt-4 inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors",
                        isCelebration
                          ? "border-zinc-600 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white"
                          : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                      )}
                    >
                      {entry.ctaLabel}
                      <ArrowRightIcon className="size-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
