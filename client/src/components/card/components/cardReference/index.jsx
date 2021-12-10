import React from 'react';
import PropTypes from 'prop-types';
import { Container, Reference, Label } from './styles';
import CloudImage from 'components/utils/image';
import Latext from 'components/utils/latext';

const CardReferences = ({ references }) => {
	const renderReferences = () =>
		references.map((r, index) => {
			const renderImage = r.image.cloudId && (
				<CloudImage cloudId={r.image.cloudId} alt={r.image.description} />
			);
			const renderText = r.text && <Latext>{r.text}</Latext>;
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

	return <Container>{references && renderReferences()}</Container>;
};

CardReferences.propTypes = {
	references: PropTypes.array
};

export default CardReferences;
