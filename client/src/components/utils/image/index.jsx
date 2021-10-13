import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';

const CLOUD_NAME = 'dmmbvk0xr';

const CloudImage = ({ cloudId, ...props }) => (
	<Image cloudName={CLOUD_NAME} publicId={cloudId} width="100%" {...props} />
);

CloudImage.propTypes = {
	cloudId: PropTypes.string.isRequired,
	props: PropTypes.any
};

export default CloudImage;
