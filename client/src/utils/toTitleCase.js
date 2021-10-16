export const toTitleCase = (text) => {
	return text.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase() + m2.toLowerCase());
};
