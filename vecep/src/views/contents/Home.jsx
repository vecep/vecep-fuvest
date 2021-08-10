import React from 'react'
import logo from '../../images/blah.png'
import { Filter, HomeContainer, Practice, Results, Side, StyledButton } from './styles'
import { Skeleton } from '@material-ui/lab'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import DiscordIcon from '../../images/discord-icon.svg';
import ScrollButton from '../../components/utils/scrollButton';

const Home = () => {

  const renderPage = () => (
    <HomeContainer>
      <div className="home-intro">
        <div className="text">
          <span>Afinal... quem somos nós?!</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur neque tempus,
            elementum leo ut, gravida eros. Phasellus malesuada arcu elit, id hendrerit neque
            convallis sed. Suspendisse condimentum lacinia nisl congue posuere. Nullam elementum leo
            at rutrum imperdiet. Nam varius lacus nunc.
          </p>
          <p>
            Quisque feugiat libero et hendrerit auctor. Fusce venenatis nec lacus id lacinia.
            Phasellus tempor finibus mauris id feugiat. Praesent ac lectus augue. Aenean non augue
            purus. Proin ornare vestibulum nisl, vel rhoncus risus. Integer porttitor tincidunt
            semper. In ante erat, malesuada id enim quis, lacinia volutpat velit. Phasellus ut aliquet
            ante.
          </p>
        </div>
        <div className="image">
          <img src={logo} alt="" className="home-info-image" />
        </div>
      </div>
      <StyledButton>Começe Já!</StyledButton>

      <div className="home-statistics">
        <span>+40<br />provas</span>
        <span>+3600<br />questões</span>
        <span>+117.000<br />candidatos</span>
      </div>

      <div className="feature-grid">
          <Side>
              <span className="title">Separamos os conteúdos bonitinhos, pra você...</span>
              <Skeleton variant="rect" className="side"/>
          </Side>

          <Results>
              <span className="title">Veja seus resultados</span>
              <Skeleton variant="rect" className="results"/>
          </Results>
          <Practice>
              <span className="title">Pratique, pratique, pratique!</span>
              <Skeleton variant="rect" className="practice" />
          </Practice>

          <Filter>
              <span className="title">Filtre para achar o que você precisa!</span>
              <Skeleton variant="rect" className="filter" />
          </Filter>
      </div>

      <div className="home-footer">
        <div className="footer-info">
          <div className="contact">
            <span>Converse com a gente!</span>
            <span>(19) 9 9999-9999</span>
            <span><b>vecep.fuvest@gmail.com</b></span>
          </div>

          <div className="about">
            <span>Sobre a Fuvest</span>
            <span>Site do vestibular</span>
            <span>Portal da USP</span>
          </div>
        </div>

        <div className="social-media">
          <div>
            <span>Acesse nossas redes</span>
            <div>
              <FacebookIcon />
              <img src={DiscordIcon} alt=""/>
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </HomeContainer>
  )

  return (
    <>
      {renderPage()}
      <ScrollButton />
    </>
  );
}

export default Home;
