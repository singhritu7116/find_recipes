import {Menu} from 'semantic-ui-react';
import { logo } from '../../constants/constants';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <Menu borderless fixed='top'>
              <Menu.Item>
                <img src={logo} alt="logo" style={{width:100}}/>
              </Menu.Item>
          <Menu.Item
            name='Home' as = {Link} to="/find_recipes"
          />
          <Menu.Item
            name='Recipes' as = {Link} to="/recipes"
          />
          <Menu.Menu position='right'>
          <Menu.Item
            name='About Us' as ={Link} to = "/About"
          />
          <Menu.Item
            name='Creators' as ={Link} to = "/Creators"
          />

          </Menu.Menu>
        </Menu>
        </div>
    )
}

export default NavBar;
