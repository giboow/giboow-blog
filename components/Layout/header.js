import {Navbar, NavItem, Icon} from 'react-materialize'
import Link from 'next/link'



export default () => (
  <header className="masthead">
      <Navbar className="top-nav" brand='logo' right>
        <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
        <NavItem
          href='get-started.html'><Icon>view_module</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
      </Navbar>
  </header>
)