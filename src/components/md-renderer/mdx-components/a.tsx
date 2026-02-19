import Link from "next/link";

const annotationLink = ({ href, children, ...props }: any) => {
  const isInternal = href?.startsWith("/") || href?.startsWith("#");
  if (isInternal) {
    return (
      <Link href={href} {...props} className="text-yellow-500 hover:underline">
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-500 hover:underline"
      {...props}
    >
      {children}
    </a>
  );
};

export default annotationLink;
