export const normalizeWord = (word) => word.normalize('NFD').replace(/\p{Diacritic}/gu, '');
