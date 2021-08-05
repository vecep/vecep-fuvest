import React from "react"
import logo from "../../images/blah.png"
import Button from '@material-ui/core/Button';
import { Batatinha, Image } from "./style"

const Home = props => (
    <Batatinha>
        <div className="home-info">
            <div className="home-info-text">
                <h3>Afinal... quem somos nós?!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur neque tempus, elementum leo ut, gravida eros. Phasellus malesuada arcu elit, id hendrerit neque convallis sed. Suspendisse condimentum lacinia nisl congue posuere. Nullam elementum leo at rutrum imperdiet. Nam varius lacus nunc.</p>
                <p>Quisque feugiat libero et hendrerit auctor. Fusce venenatis nec lacus id lacinia. Phasellus tempor finibus mauris id feugiat. Praesent ac lectus augue. Aenean non augue purus. Proin ornare vestibulum nisl, vel rhoncus risus. Integer porttitor tincidunt semper. In ante erat, malesuada id enim quis, lacinia volutpat velit. Phasellus ut aliquet ante.</p>
            </div>
            <Image>
                <img src={logo} alt='' className="home-info-image" />
            </Image>
        </div>
        <Button variant="contained" color="primary">oi</Button>
    </Batatinha>
)

export default Home