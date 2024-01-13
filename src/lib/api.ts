import request, { gql } from 'graphql-request';

type IQuestion = {
	word: string;
	POS: string;
	meaning: string;
	answer: string;
	choices: string[];
	example: string;
	synonym: string;
};

const document = gql`
	{
		question {
			word
			POS
			answer
			choices
			meaning
			example
			synonym
		}
	}
`;

export const fetchQuestion = async () => {
	return await request<{ question: IQuestion }>(
		`${window.location.origin}/api/graphql`,
		document
	).then((e) => e.question);
};
