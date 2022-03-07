import {
    Button,
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

    return (
        <Card
        // className={styles.root}
        >
            <CardContent>
                <FormControl>
                    <FormLabel id="question">
                        {loading && <Skeleton variant="text" />}
                        {!loading && (
                            <Typography variant="h4" component="h2">
                                {question}
                            </Typography>
                        )}
                    </FormLabel>
                    {loading && (
                        <>
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                        </>
                    )}
                    {!loading && (
                        <RadioGroup
                            aria-labelledby="question"
                            defaultValue={choices[0]}
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
                <Button
                    size="small"
                    variant="contained"
                    endIcon={<NavigateNextIcon />}
                    onClick={onNextQuestion}
                >
                    Next Question
                </Button>
            </CardActions>
        </Card>
    );
};

export default QuestionCard;
