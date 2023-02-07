import { ReactElement } from "react";
import homePageLogo from "../../asset/home.png"
export const Header = (): ReactElement => {
  return (
    <header>
      <a href="/"><img src={homePageLogo} alt="Back to home page"/></a>
    </header>
  )
}