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

type TypeConfig = {
  label: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  dot: string;
};

const typeConfig: Record<ChangeEntry["type"], TypeConfig> = {
  celebration: {
    label: "Milestone",
    icon: TrophyIcon,
    color: "text-white/80",
    bg: "bg-white/15",
    dot: "bg-zinc-900",
  },
  feature: {
    label: "Feature",
    icon: SparklesIcon,
    color: "text-zinc-600",
    bg: "bg-zinc-100",
    dot: "bg-zinc-400",
  },
  improvement: {
    label: "Improvement",
    icon: WrenchIcon,
    color: "text-zinc-600",
    bg: "bg-zinc-100",
    dot: "bg-zinc-400",
  },
  fix: {
    label: "Fix",
    icon: BugIcon,
    color: "text-zinc-600",
    bg: "bg-zinc-100",
    dot: "bg-zinc-400",
  },
};

/* Per-project celebration card colors */
type CelebrationPalette = {
  cardBg: string;
  cardBorder: string;
  cardHover: string;
  dot: string;
  dotRing: string;
  title: string;
  desc: string;
  meta: string;
  separator: string;
  badgeBg: string;
  badgeText: string;
  btnBg: string;
  btnBorder: string;
  btnText: string;
  btnHover: string;
  imgBorder: string;
};

const projectCelebrationColors: Record<string, CelebrationPalette> = {
  IBZIM: {
    cardBg: "bg-amber-500",
    cardBorder: "border-amber-400",
    cardHover: "hover:border-amber-300",
    dot: "bg-amber-500",
    dotRing: "ring-amber-200",
    title: "text-amber-950",
    desc: "text-amber-900/70",
    meta: "text-amber-800/60",
    separator: "text-amber-400",
    badgeBg: "bg-amber-600/30",
    badgeText: "text-amber-950",
    btnBg: "bg-amber-600",
    btnBorder: "border-amber-700",
    btnText: "text-white",
    btnHover: "hover:bg-amber-700",
    imgBorder: "border-amber-400",
  },
  "Zim Developers Blog": {
    cardBg: "bg-teal-600",
    cardBorder: "border-teal-500",
    cardHover: "hover:border-teal-400",
    dot: "bg-teal-600",
    dotRing: "ring-teal-200",
    title: "text-white",
    desc: "text-teal-100/80",
    meta: "text-teal-200/60",
    separator: "text-teal-400",
    badgeBg: "bg-white/15",
    badgeText: "text-teal-100",
    btnBg: "bg-teal-700",
    btnBorder: "border-teal-800",
    btnText: "text-white",
    btnHover: "hover:bg-teal-800",
    imgBorder: "border-teal-400",
  },
  "Xfinity Pros Inc.": {
    cardBg: "bg-sky-600",
    cardBorder: "border-sky-500",
    cardHover: "hover:border-sky-400",
    dot: "bg-sky-600",
    dotRing: "ring-sky-200",
    title: "text-white",
    desc: "text-sky-100/80",
    meta: "text-sky-200/60",
    separator: "text-sky-400",
    badgeBg: "bg-white/15",
    badgeText: "text-sky-100",
    btnBg: "bg-sky-700",
    btnBorder: "border-sky-800",
    btnText: "text-white",
    btnHover: "hover:bg-sky-800",
    imgBorder: "border-sky-400",
  },
  TheWord: {
    cardBg: "bg-violet-600",
    cardBorder: "border-violet-500",
    cardHover: "hover:border-violet-400",
    dot: "bg-violet-600",
    dotRing: "ring-violet-200",
    title: "text-white",
    desc: "text-violet-100/80",
    meta: "text-violet-200/60",
    separator: "text-violet-400",
    badgeBg: "bg-white/15",
    badgeText: "text-violet-100",
    btnBg: "bg-violet-700",
    btnBorder: "border-violet-800",
    btnText: "text-white",
    btnHover: "hover:bg-violet-800",
    imgBorder: "border-violet-400",
  },
  "Rapid Range": {
    cardBg: "bg-rose-600",
    cardBorder: "border-rose-500",
    cardHover: "hover:border-rose-400",
    dot: "bg-rose-600",
    dotRing: "ring-rose-200",
    title: "text-white",
    desc: "text-rose-100/80",
    meta: "text-rose-200/60",
    separator: "text-rose-400",
    badgeBg: "bg-white/15",
    badgeText: "text-rose-100",
    btnBg: "bg-rose-700",
    btnBorder: "border-rose-800",
    btnText: "text-white",
    btnHover: "hover:bg-rose-800",
    imgBorder: "border-rose-400",
  },
  "Peya Peya": {
    cardBg: "bg-emerald-600",
    cardBorder: "border-emerald-500",
    cardHover: "hover:border-emerald-400",
    dot: "bg-emerald-600",
    dotRing: "ring-emerald-200",
    title: "text-white",
    desc: "text-emerald-100/80",
    meta: "text-emerald-200/60",
    separator: "text-emerald-400",
    badgeBg: "bg-white/15",
    badgeText: "text-emerald-100",
    btnBg: "bg-emerald-700",
    btnBorder: "border-emerald-800",
    btnText: "text-white",
    btnHover: "hover:bg-emerald-800",
    imgBorder: "border-emerald-400",
  },
};

const defaultCelebrationColors: CelebrationPalette = {
  cardBg: "bg-zinc-800",
  cardBorder: "border-zinc-700",
  cardHover: "hover:border-zinc-600",
  dot: "bg-zinc-700",
  dotRing: "ring-zinc-300",
  title: "text-white",
  desc: "text-zinc-300",
  meta: "text-zinc-400",
  separator: "text-zinc-600",
  badgeBg: "bg-white/15",
  badgeText: "text-zinc-200",
  btnBg: "bg-zinc-700",
  btnBorder: "border-zinc-600",
  btnText: "text-zinc-200",
  btnHover: "hover:bg-zinc-600",
  imgBorder: "border-zinc-600",
};

function getCelebrationPalette(project: string): CelebrationPalette {
  return projectCelebrationColors[project] ?? defaultCelebrationColors;
}

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
          const isCelebration = entry.type === "celebration";
          const palette = isCelebration
            ? getCelebrationPalette(entry.project)
            : null;

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
                      ? cn("border-white ring-2", palette!.dot, palette!.dotRing)
                      : cn("border-white", config.dot)
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
                      ? cn(palette!.cardBg, palette!.cardBorder, palette!.cardHover)
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                  )}
                >
                  {/* Mobile date */}
                  <span
                    className={cn(
                      "mb-2 block text-xs sm:hidden",
                      isCelebration ? palette!.meta : "text-zinc-400"
                    )}
                  >
                    {formatDate(entry.date)}
                  </span>

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "text-xs font-medium",
                        isCelebration ? palette!.meta : "text-zinc-500"
                      )}
                    >
                      {entry.project}
                    </span>
                    <span
                      className={
                        isCelebration ? palette!.separator : "text-zinc-300"
                      }
                    >
                      {"/"}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                        isCelebration
                          ? cn(palette!.badgeBg, palette!.badgeText)
                          : cn(config.bg, config.color)
                      )}
                    >
                      <TypeIcon className="size-3" />
                      {config.label}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "mt-2 text-sm font-semibold",
                      isCelebration ? palette!.title : "text-zinc-900"
                    )}
                  >
                    {entry.title}
                  </h3>

                  <p
                    className={cn(
                      "mt-1 text-sm leading-relaxed",
                      isCelebration ? palette!.desc : "text-zinc-500"
                    )}
                  >
                    {entry.description}
                  </p>

                  {entry.image && (
                    <div
                      className={cn(
                        "mt-4 overflow-hidden rounded-md border",
                        isCelebration
                          ? palette!.imgBorder
                          : "border-zinc-200"
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
                          ? cn(
                              palette!.btnBg,
                              palette!.btnBorder,
                              palette!.btnText,
                              palette!.btnHover
                            )
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
