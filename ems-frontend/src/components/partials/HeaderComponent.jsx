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
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="/">Employee Management System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/employees">Employee List</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Product List</a>
      </li>
    </ul>
  </div>
</nav>
    </header>
  )
}

export default HeaderComponent