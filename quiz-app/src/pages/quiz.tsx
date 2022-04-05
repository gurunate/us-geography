import { gql, useQuery } from '@apollo/client';

import Layout from '@/components/layout';
import QuestionCard from '@/components/question-card';

export const GET_NEXT_QUESTION = gql`
    query GetNextQuestion {
        getNextQuestion {
            question
            choices
        }
    }
`;

const QuizPage = () => {
    const { data, loading } = useQuery(GET_NEXT_QUESTION);

    const { getNextQuestion } = data ?? [];

    const handleChange = (event: any) => {
        console.log('handleChange', event.target.value);
    };

    const handleNextQuestion = () => {
        console.log('Next Question');
    };

    return (
        <Layout title="Quiz">
            <QuestionCard
                loading={loading}
                question={getNextQuestion?.question}
                choices={getNextQuestion?.choices || []}
                onSelected={handleChange}
                onNextQuestion={handleNextQuestion}
            />
        </Layout>
    );
};

export default QuizPage;
