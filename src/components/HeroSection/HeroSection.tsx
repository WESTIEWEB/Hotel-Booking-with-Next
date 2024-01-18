import ClientSide from "./components/ClientSide"
import { heading1, imageComponent } from "./components/ServerSide"


const HeroSection = () => {
  return <ClientSide heading1={heading1} imageComponent={imageComponent} /> 
}

export default HeroSection 
