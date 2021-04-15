import headerStyles from "styles/Header.module.css";

const Header = ({title}) => {
  return (
    <div className= {headerStyles.heading}>
      {title}
    </div>
  )
}

export default Header
