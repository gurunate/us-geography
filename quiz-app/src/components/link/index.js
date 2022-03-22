import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import MUILink from '@material-ui/core/Link';
import NextLink from 'next/link';

const Link = forwardRef((props, ref) => {
    const { children, href, as, locale, prefetch } = props;

    return href ? (
        <NextLink href={href} prefetch={prefetch} as={as} locale={locale}>
            <MUILink href={href} ref={ref} {...props}>
                {children}
            </MUILink>
        </NextLink>
    ) : (
        <MUILink {...props}>{children}</MUILink>
    );
});

Link.displayName = 'Link';

Link.propTypes = {
    as: PropTypes.string,
    children: PropTypes.any,
    href: PropTypes.any,
    locale: PropTypes.string,
    prefetch: PropTypes.string
};

Link.defaultProps = {
    as: null,
    children: '',
    href: null,
    locale: null,
    prefetch: null
};

export default Link;
