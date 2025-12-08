import clsx from "clsx";

export default function Container({ className, children, ...props }: any) {
  return (
    <div
      className={clsx(
        "relative w-full max-w-7xl px-4 sm:px-8 lg:px-12 mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
