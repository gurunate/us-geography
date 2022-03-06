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
    Typography
} from '@mui/material';

/**
 *
 * @returns
 */
const QuestionCard = props => {
    const { question, choices, onChange } = props;

    return (
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel id="question">
                        <Typography variant="h4" component="h2">
                            {question}
                        </Typography>
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="question"
                        defaultValue={choices[0]}
                        name="choices"
                        onChange={onChange}
                    >
                        {choices.map(choice => (
                            <FormControlLabel
                                value={choice}
                                control={<Radio />}
                                label={choice}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">
                    Answer
                </Button>
            </CardActions>
        </Card>
    );
};

export default QuestionCard;
