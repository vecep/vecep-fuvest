export const getColorRange = (value) => {
	var hue=((1 - (1 - value)) * 1.2).toString(10);
	return ['hsl(',hue,',100%,50%)'].join('');
};

export default getColorRange;

