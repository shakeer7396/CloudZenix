const navBar =()=>{
    return`<div>
    <nav class="navbar navbar-expand-md navbar-dark bg-success sticky-top" margin-bottom="100">
    <a class="navbar-brand" href="#"><img src="logo.jpeg" alt="Logo" width="150" height="100"></a>
    <button class="navbar-toggler" type="button" text-warning data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mx-auto  justify-content-center">
               
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" text-warning data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            GramTejus
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="Pages/Fp.html">GT-Technologies</a>
            <a class="dropdown-item" href="#">GT-Technologies</a>
            <a class="dropdown-item" href="#">GT-Technologies</a>
            <a class="dropdown-item" href="#">GT-Technologies</a>
            <a class="dropdown-item" href="#">GT-Technologies</a>
            <a class="dropdown-item" href="#">GT-Technologies</a>
            <a class="dropdown-item" href="#">GT-Technologies</a>
            <a class="dropdown-item" href="#">GT-Technologies</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Devops
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">GT-Technologies</a>
          <a class="dropdown-item" href="#">GT-Technologies</a>
          <a class="dropdown-item" href="#">GT-Technologies</a>
          <a class="dropdown-item" href="#">GT-Technologies</a>
          <a class="dropdown-item" href="#">GT-Technologies</a>
          <a class="dropdown-item" href="#">GT-Technologies</a>
          <a class="dropdown-item" href="#">GT-Technologies</a>
          <a class="dropdown-item" href="#">GT-Technologies</a>

          </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Staffing Solutions
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Staff Augmentation</a>
              <a class="dropdown-item" href="#">US IT Recruitment</a>
              <a class="dropdown-item" href="#">India IT Recruitment</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Company
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">About Us</a>
              <a class="dropdown-item" href="#">Careers</a>
              <a class="dropdown-item" href="#">Banking & Finance</a>
              <a class="dropdown-item" href="#">Insurance</a>
              <a class="dropdown-item" href="#">Healthcare</a>
            
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact Us
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" >
              Employee Login
            </a>
            
          </li>
          
      </ul>
    </div>
  </nav>
    </div>`
}
    

export {navBar} 