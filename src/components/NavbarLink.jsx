const NavbarLink = ({href,linkName,active,onClick}) => {
  return (
    <div>
        <a onClick={onClick} href={href} className={`lg:font-medium text-sm lg:text-base ${active ? "underline-offset-8 underline  decoration-[#F6C5D1] decoration-2  text-[#F6C5D1]" : "text-white"}
        `}>{linkName}</a>
    </div>
  )
}

export default NavbarLink