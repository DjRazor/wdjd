// import React from "react";
// import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Leaderboard } from "./leaderboard/leaderboard";

// export function Header() {
//     return (
//     <BrowserRouter>
//       <div className='body bg-dark text-light'>
//         <header className='container-fluid'>
//           <nav className='navbar fixed-top navbar-dark'>
//             <div className='navbar-brand'>WDJD</div>
//             <menu className='navbar-nav'>
//                 <li className='nav-item'>
//                     <NavLink className='nav-link' to=''>
//                         Login
//                     </NavLink>
//                 </li>
//                 <li className='nav-item'>
//                     <NavLink className='nav-link' to='play'>
//                         Play
//                     </NavLink>
//                 </li>
//                 <li className='nav-item'>
//                     <NavLink className='nav-link' to='leaderboard'>
//                         Leaderboard
//                     </NavLink>
//                 </li>
//                 <li className='nav-item'>
//                     <NavLink className='nav-link' to='about'>
//                         About
//                     </NavLink>
//                 </li>
//             </menu>
//           </nav>
//         </header>

//         <Routes>
//           <Route path='/' element={<Login />}/>
//           <Route path='/play' element={<Quiz />} />
//           <Route path='/leaderboard' element={<Leaderboard />} />
//           <Route path='/about' element={<About />} />
//           <Route path='*' element={<NotFound />} />
//         </Routes>

//         <footer className='bg-dark text-dark text-muted'>
//           <div className='container-fluid'>
//             <span className='text-reset'>Author Name(s)</span>
//             <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
//               Source
//             </a>
//           </div>
//         </footer>
//       </div>
//     </BrowserRouter>
//     );
// }