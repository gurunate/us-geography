import Layout from '@/components/layout';
import QuestionCard from '@/components/question-card';

const QuizPage = () => {
    const handleChange = event => {
        console.log('handleChange', event.target.value);
    };

    return (
        <Layout title="Quiz">
            <QuestionCard
                question="What is the capital of North Dakota?"
                choices={['Bismarck', 'St. Paul', 'Springfield', 'Madison']}
                onChange={handleChange}
            />
        </Layout>
    );
};

export default QuizPage;
