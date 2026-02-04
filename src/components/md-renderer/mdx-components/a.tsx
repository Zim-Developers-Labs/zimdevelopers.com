import { Link } from "@chakra-ui/react";

type EnrichedLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const EnrichedLink = (props: EnrichedLinkProps) => {
  // Is external URL or is a media URL
  const isExternalUrl = /(^http(s)?:\/\/)|(\.(png|svg|jpeg|jpg)$)/.test(props.href);

  const linkProps: Record<string, string> = {
    target: '_self',
    ...(isExternalUrl ? { rel: 'nofollow', target: '_blank'} : {})
  };

  return (
    <Link color='mainColor' fontWeight='bold' borderBottomColor='mainColor' borderBottomWidth={2} _hover={{textDecoration: 'none', color: 'mainColorLight'}} href={props.href}  {...linkProps}>
      {props.children}
    </Link>
  );
};
