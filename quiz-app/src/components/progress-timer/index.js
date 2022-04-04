import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, LinearProgress, Skeleton, Typography } from '@mui/material';

let interval;
const tick = 250;

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

/**
 * Visual progress timer.
 *
 * @param {*} props
 * @returns
 */
const ProgressTimer = props => {
    const { duration, loading } = props;

    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (progress === 100) {
            interval = setInterval(() => {
                setProgress(prev => prev - tick / (duration * 10));
            }, tick);
        }

        if (progress <= 0) {
            clearInterval(interval);
        }
    }, [interval, progress, setProgress]);

    return (
        <Box sx={{ width: '100%' }}>
            {loading && (
                <Skeleton variant="rectangular" width="100%" height={10} />
            )}
            {!loading && (
                <LinearProgressWithLabel
                    aria-label="timer"
                    variant="determinate"
                    value={progress}
                    color={progress <= 0 ? 'error' : 'primary'}
                />
            )}
        </Box>
    );
};

ProgressTimer.propTypes = {
    duration: PropTypes.number,
    loading: PropTypes.bool
};

ProgressTimer.defaultProps = {
    duration: 10,
    loading: false
};

export default ProgressTimer;
