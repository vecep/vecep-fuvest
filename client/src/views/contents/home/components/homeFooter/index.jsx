import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { DiscordIcon } from 'components/utils/discordIcon';
import { Container, Title, Span, Content, Info, SocialMedia, IconsContainer } from './styles';

const HomeFooter = () => (
	<Container>
		<Info>
			<Content>
				<Title>Converse com a gente!</Title>
				<Span>(19) 9 8244-9339</Span>
				<Span bold>vecep.fuvest@gmail.com</Span>
			</Content>

			<Content>
				<Title>Sobre a Fuvest</Title>
				<Span>
					<a href="https://www.fuvest.br/" target="_blank" rel="noopener noreferrer">
						Site do vestibular
					</a>
				</Span>
				<Span>
					<a href="https://www5.usp.br/" target="_blank" rel="noopener noreferrer">
						Portal da USP
					</a>
				</Span>
			</Content>
		</Info>

		<SocialMedia>
			<Content>
				<Title>Acesse nossas redes</Title>
				<IconsContainer>
					<a
						href="https://www.facebook.com/matheus.siqueirasordi/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FacebookIcon />
					</a>
					<a
						href="https://www.instagram.com/matheus_0110_/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DiscordIcon />
					</a>
					<a
						href="https://www.instagram.com/matheus_0110_/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TwitterIcon />
					</a>
					<a
						href="https://www.instagram.com/matheus_0110_/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<InstagramIcon />
					</a>
				</IconsContainer>
			</Content>
		</SocialMedia>
	</Container>
);

export default HomeFooter;
