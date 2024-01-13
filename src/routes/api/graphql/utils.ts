export function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}

export function pickFourRandomly<T extends { pos: string; synonym: string }>(
	list: T[],
	index: number
): Array<T> {
	// Make a copy of the list
	let copyList = [...list];
	// Remove the index passed in from the list
	copyList.splice(index, 1);
	copyList = copyList.filter((item) => item?.pos !== '-' && item?.synonym !== '-');
	// Shuffle the list randomly
	const shuffledList = copyList.sort(() => Math.random() - 0.5);
	// Pick the first 3 elements from the shuffled list
	const randomThree = shuffledList.slice(0, 3);
	// Add the index back to the list and shuffle again
	const listWithIndex = [...randomThree, list[index]].sort(() => Math.random() - 0.5);
	// Return the final list of 4 elements
	return listWithIndex;
}
