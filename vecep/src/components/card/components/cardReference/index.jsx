import React from 'react';
import PropTypes from 'prop-types';
import { Container, Reference, Text, Label } from './styles';

const CardReferences = ({ references }) => {
	const renderReferences = () =>
		references.map((r, index) => {
			const renderImage = r.image_path && <img src={r.image_path} alt="" />;
			const renderText = r.text && <Text>{r.text}</Text>;
			const renderSource = r.source && <Label className="source">{r.source}</Label>;
			const renderAuthor = r.author && <Label>{r.author}</Label>;
			const renderSeparator = references.length > 0 && index !== references.length - 1 && (
				<Label className="separator">...</Label>
			);

			return (
				<Reference key={r.id}>
					{renderImage}
					{renderText}
					{renderSource}
					{renderAuthor}
					{renderSeparator}
				</Reference>
			);
		});

	return <Container>{renderReferences()}</Container>;
};

CardReferences.propTypes = {
	references: PropTypes.array.isRequired
};

export default CardReferences;
