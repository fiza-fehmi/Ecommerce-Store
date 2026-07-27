const NavbarLink = ({href,linkName,active,onClick}) => {
  return (
    <div>
        <a onClick={onClick} href={href} className={`lg:font-medium text-sm lg:text-base ${active ? "underline-offset-8 underline  decoration-[#5A3FF2] decoration-2  text-[#5A3FF2]" : "text-black"}
        `}>{linkName}</a>
    </div>
  )
}

export default NavbarLink