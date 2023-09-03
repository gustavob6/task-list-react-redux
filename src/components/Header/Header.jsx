import React from 'react'
import { Dropdown, Icon, Menu} from 'semantic-ui-react'
import SearchTask from '../SearchTask/SearchTask'
import { NavLink,useLocation } from 'react-router-dom'

function Header ()  {

	const location = useLocation();
	let band = false;
	console.log(location);
	if(location.pathname === '/new'){
		band = true;
	}

 return(
	<div>
		<Menu attached='top'>
		<Dropdown item icon='wrench' simple>
			<Dropdown.Menu>
			{!band && 
			<Dropdown.Item>
				<Icon name='dropdown' />
				<span className='text new'>New</span>
				<Dropdown.Menu>
				<Dropdown.Item as={NavLink} to='/new'>Task</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown.Item> 
			}	
			
			{band && <Dropdown.Item as={NavLink} to='/'>Home</Dropdown.Item>}	
			</Dropdown.Menu>
		</Dropdown>

		<Menu.Menu position='right'>
			<div className='ui right aligned category search item'>
			<div className='ui transparent icon input'>
				<SearchTask/>
				<i className='search link icon' />
			</div>
			<div className='results' />
			</div>
		</Menu.Menu>
		</Menu>
	</div>
)
}

export default Header
