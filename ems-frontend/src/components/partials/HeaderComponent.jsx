import React from 'react'

const HeaderComponent = () => {
  return (
    <header>
        {/* <nav className='navbar navbar-dark bg-primary'>
<a className="navbar-brand" href="/">Employee Management System</a>
<ul class="navbar-nav mr-auto">
    <li className="nav-item">
    <a className='nav-link' href="/employees">Employee List</a>
    </li>
</ul>

        </nav> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="/">Employee Management System</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/employees">Employee List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Product List</a>
      </li>
    </ul>
  </div>
</nav>
    </header>
  )
}

export default HeaderComponent