import { convertToSlug } from '@/lib/utils';

const H1 = ({ children }: any) => {
  const id = convertToSlug(`${children}`);

  return (
    <h1 className="mb-5 text-[1.875rem] font-[800] md:text-5xl" id={id}>
      {children}
    </h1>
  );
};

const H2 = ({ children }: any) => {
  const id = convertToSlug(`${children}`);

  return (
    <h2
      className="-mt-20 mb-5 pt-28 text-[1.875rem] font-[600] md:text-4xl"
      id={id}
    >
      {children}
    </h2>
  );
};

const H3 = ({ children }: any) => {
  const id = convertToSlug(`${children}`);

  return (
    <h3
      className="-mt-20 mb-5 pt-28 text-[1.6rem] font-[500] md:text-3xl"
      id={id}
    >
      {children}
    </h3>
  );
};

const H4 = ({ children }: any) => {
  return (
    <h4 className="text-primaryColor mb-4 text-[1.6rem] font-[500] md:text-2xl">
      {children}
    </h4>
  );
};

const Headings = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
};

export default Headings;
