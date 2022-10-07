import Eight from "../../sections/about/Eight"
import First from "../../sections/about/First"
import Five from "../../sections/about/Five"
import Four from "../../sections/about/Four"
import Second from "../../sections/about/Second"
import Seven from "../../sections/about/Seven"
import Six from "../../sections/about/Six"
import Three from "../../sections/about/Three"
import "./about.css"

const About = () => {
  return (
    <div className='about'>
        <First />
        <Second />
        <Three />
        <Four />
        <Five />
        <Six />
        <Seven />
        <Eight />
    </div>
  )
}

export default About