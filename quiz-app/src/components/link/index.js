import PropTypes from 'prop-types';
import MUILink from '@mui/material/Link';
import NextLink from 'next/link';

const Link = props => {
    const { children, href, as, locale, prefetch } = props;

    return href ? (
        <NextLink href={href} prefetch={prefetch}>
            <MUILink href={href} {...props}>
                {children}
            </MUILink>
        </NextLink>
    ) : (
        <MUILink {...props}>{children}</MUILink>
    );
};

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
