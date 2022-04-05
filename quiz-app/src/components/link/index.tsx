import { forwardRef, FC } from 'react';
import MUILink from '@mui/material/Link';
import NextLink from 'next/link';

type LinkProps = {
    as: string;
    children: React.ReactNode;
    href: any;
    locale: string;
    prefetch: boolean;
};

/**
 * Link component.
 */
const Link: FC<LinkProps> = forwardRef<HTMLInputElement, LinkProps>(
    (props, ref) => {
        const { children, href, as, locale, prefetch } = props;

        return href ? (
            <NextLink href={href} prefetch={prefetch} as={as} locale={locale}>
                <MUILink ref={ref as any} {...props}>
                    {children}
                </MUILink>
            </NextLink>
        ) : (
            <MUILink {...props}>{children}</MUILink>
        );
    }
);

export default Link;
