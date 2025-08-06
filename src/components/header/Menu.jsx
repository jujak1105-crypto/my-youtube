import React from 'react'
import {headerMenus, searchKeyword} from '../../data/header'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {

const location = useLocation();
console.log(location);
return (
	<nav className='header_menu'>
		<ul className='menu'>
			{
			headerMenus.map((menu, key)=>(
				<li className={location.pathname === menu.src ? "active" : ""} key={key}>
				<Link to={menu.src}>
						{menu.icon}{menu.title}
				</Link>
				</li>
			))
			}

				
		</ul>
		<ul className='keyword'>
			{
			searchKeyword.map((keyword, key)=>(
				<li className={location.pathname === keyword.src ? "active" : ""} key={key}>
				<Link to={keyword.src}>{keyword.title}</Link>
				</li>
			))
			}
		</ul>
	</nav>
  )
}

export default Menu