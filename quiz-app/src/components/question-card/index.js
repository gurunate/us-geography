import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
    Button,
    Box,
    Card,
    CardActions,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Skeleton,
    Typography
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// import styles from './styles.module.scss';

/**
 * Question Card component.
 *
 * @returns
 */
const QuestionCard = props => {
    const { question, choices, onSelected, loading, onNextQuestion } = props;

    const { handleSubmit } = useForm();

    return (
        <Card
        // className={styles.root}
        >
            <CardContent>
                <FormControl>
                    <FormLabel id="question">
                        {loading && (
                            <Skeleton
                                variant="rectangular"
                                width={300}
                                height={32}
                            />
                        )}
                        {!loading && (
                            <Typography variant="h4" component="h2">
                                {question}
                            </Typography>
                        )}
                    </FormLabel>
                    {loading && (
                        <>
                            <Box mt={2}>
                                <Skeleton
                                    variant="rectangular"
                                    width={150}
                                    height={22}
                                />
                            </Box>
                            <Box mt={2}>
                                <Skeleton
                                    variant="rectangular"
                                    width={150}
                                    height={22}
                                />
                            </Box>
                            <Box mt={2}>
                                <Skeleton
                                    variant="rectangular"
                                    width={150}
                                    height={22}
                                />
                            </Box>
                            <Box mt={2}>
                                <Skeleton
                                    variant="rectangular"
                                    width={150}
                                    height={22}
                                />
                            </Box>
                        </>
                    )}
                    {!loading && (
                        <RadioGroup
                            aria-labelledby="question"
                            name="choices"
                            onChange={onSelected}
                        >
                            {choices.map((choice, idx) => (
                                <FormControlLabel
                                    key={idx}
                                    value={choice}
                                    control={<Radio />}
                                    label={choice}
                                />
                            ))}
                        </RadioGroup>
                    )}
                </FormControl>
            </CardContent>
            <CardActions>
                {loading && (
                    <Skeleton variant="rectangular" width={200} height={28} />
                )}
                {!loading && (
                    <Button
                        size="small"
                        variant="contained"
                        endIcon={<NavigateNextIcon />}
                        onClick={onNextQuestion}
                    >
                        Next Question
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

QuestionCard.propTypes = {
    choices: PropTypes.array,
    loading: PropTypes.bool,
    onNextQuestion: PropTypes.func,
    onSelected: PropTypes.func,
    question: PropTypes.string
};

QuestionCard.defaultProps = {
    choices: [],
    loading: false,
    onNextQuestion: () => {},
    onSelected: () => {},
    question: ''
};

export default QuestionCard;
