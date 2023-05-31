// import React, { useState } from 'react';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// // Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
// //       <button className="sidebar-toggle" onClick={toggleSidebar}>
// //         <i className="fas fa-bars"></i>
// //       </button>
// //       {/* Sidebar content */}
// //       <ul className="sidebar-menu">
// //         <li>Menu Item 1</li>
// //         <li>Menu Item 2</li>
// //         <li>Menu Item 3</li>
// //       </ul>
// //     </div>
// //   );
// // };


// <SideNav
//     onSelect={(selected) => {
//         // Add your code here
//     }}
// >
//     <SideNav.Toggle />
//     <SideNav.Nav defaultSelected="home">
//         <NavItem eventKey="home">
//             <NavIcon>
//                 <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
//             </NavIcon>
//             <NavText>
//                 Home
//             </NavText>
//         </NavItem>
//         <NavItem eventKey="charts">
//             <NavIcon>
//                 <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
//             </NavIcon>
//             <NavText>
//                 Charts
//             </NavText>
//             <NavItem eventKey="charts/linechart">
//                 <NavText>
//                     Line Chart
//                 </NavText>
//             </NavItem>
//             <NavItem eventKey="charts/barchart">
//                 <NavText>
//                     Bar Chart
//                 </NavText>
//             </NavItem>
//         </NavItem>
//     </SideNav.Nav>
// </SideNav>


// export default SideNav;


<div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main>
    </div>
    export default Sidebar;