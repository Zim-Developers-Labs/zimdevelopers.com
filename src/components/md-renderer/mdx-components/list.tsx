export function Ul({ children }: any) {
  return <ul className="mb-5 ml-4 list-disc">{children}</ul>;
}

export function Ol({ children }: any) {
  return <ol className="mb-5 ml-4 list-decimal">{children}</ol>;
}

export function Li({ children }: any) {
  return <li className="mt-4">{children}</li>;
}
