import { createSchema, createYoga } from 'graphql-yoga';
import type { RequestEvent } from '@sveltejs/kit';
import  { dictionary }  from './dictionary.js';
import { getRandomInt, pickFourRandomly } from './utils.js';

const yogaApp = createYoga<RequestEvent>({
	schema: createSchema({
		typeDefs: `
			type Query {
				question: Question
				dictionary: [Dictionary]
			}
			
			type Question {
				word: String
				choices: [String]
				answer: String
				meaning: String
				POS: String
				example: String
				synonym: String
			}

			type Dictionary {
				word: String
				meaning: String
				synonym: String
				example: String
			}

		`,
		resolvers: {
			Query: {
				question: () => {
					const rnd = getRandomInt(dictionary.length);

					const questionType = ['meaning', 'pos', 'synonym'];
					const vocab = dictionary[rnd];
					const randType = questionType[getRandomInt(3)];
					const choices: string[] =
						randType === 'pos'
							? ['n.', 'v.', 'adv.', 'adj.'].sort(() => Math.random() - 0.5)
							: pickFourRandomly(dictionary, rnd).map((item: any) => item[randType]);
					const answer = (vocab as any)[randType];

					return {
						word: vocab.word,
						meaning: vocab.meaning,
						choices,
						answer,
						POS: vocab.pos,
						example: vocab.example,
						synonym: vocab.synonym
					};
				},
				dictionary: () => dictionary
			}
		}
	}),
	// Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
	graphqlEndpoint: '/api/graphql',

	// Needed to let Yoga use sveltekit's Response object
	fetchAPI: globalThis
})
export { yogaApp as GET, yogaApp as POST };