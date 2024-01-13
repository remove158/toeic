import { writable } from 'svelte/store';

type IQuestion = {
	word: string;
	POS: string;
	meaning: string;
	answer: string;
	choices: string[];
	example: string;
	synonym: string;
};

export const questionInfo = writable<IQuestion>();
export const select = writable<number>(-1);
