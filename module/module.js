const navBar =()=>{
    return`<div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
    <a class="navbar-brand" href="#"><img src="zenic.png" alt="Logo" width="200"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mx-auto  justify-content-center">
               
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="CloudSolutions/CloudSolutions.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Cloud Solutions
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="CloudSolutions/Products/cloudAssetManagement.html">CloudZenix Nimbus</a>
            <a class="dropdown-item" href="CloudSolutions/Products/cloudMigration.html">Cloud Migration</a>
            <a class="dropdown-item" href="CloudSolutions/Products/hybridCloud.html">Hybrid Cloud Management</a>
            <a class="dropdown-item" href="CloudSolutions/Products/cloudInfra.html">Cloud Infra Management</a>
            <a class="dropdown-item" href="CloudSolutions/Products/Iaac.html">IaaC</a>
            <a class="dropdown-item" href="CloudSolutions/Products/Serveless.html">Serverless App Development</a>
            <a class="dropdown-item" href="CloudSolutions/Products/Paas.html">PaaS</a>
            <a class="dropdown-item" href="CloudSolutions/Products/DevSec.html">DevSecOps</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Devops
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">CloudZenix Probe 360</a>
          <a class="dropdown-item" href="#">DevOps Consulting</a>
          <a class="dropdown-item" href="#">CI/CD Toolchain</a>
          <a class="dropdown-item" href="#">Config Management</a>
          <a class="dropdown-item" href="#">Real Time Analytics</a>
          <a class="dropdown-item" href="#">Containerization-Docker & Kubernetes</a>
          <a class="dropdown-item" href="#">AI-ML Ops</a>
          <a class="dropdown-item" href="#">SRE</a>

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
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Employee Login
            </a>
            
          </li>
          
      </ul>
    </div>
  </nav>
    </div>`
}
    

export {navBar} 