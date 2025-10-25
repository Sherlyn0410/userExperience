(function () {
    const navHtml = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="img/logo.png" height="40" alt="INTI Logo">
        </a>

        <div id="mainNavCollapse">
          <ul class="navbar-nav mb-2 mb-lg-0 gap-2">
            <li class="nav-item">
              <a class="nav-link" href="index.html" data-key="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="browse.html" data-key="browse.html">Browse events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="create.html" data-key="create.html">Create an event</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="manage.html" data-key="manage.html">Manage events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tickets.html" data-key="tickets.html">Tickets</a>
            </li>
          </ul>
        </div>

        <div class="d-flex align-items-center">
        <i class="bi bi-bell me-3 text-muted"></i>
        <div class="dropdown">
            <a class="dropdown-toggle text-decoration-none text-dark d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
            <i class="bi bi-person-circle me-2 fs-5"></i>
            <span class="nav-username">Sherlyn Kuan</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="tickets.html">My Tickets</a></li>
            <li><a class="dropdown-item" href="profile.html">Profile</a></li>
            <li><a class="dropdown-item" href="settings.html">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="login.html">Logout</a></li>
            </ul>
        </div>
        </div>
      </div>
    </nav>
    `;

    function insertNavbar() {
        const container = document.getElementById('main-navbar');
        if (!container) return;
        container.innerHTML = navHtml;
        setActive();
        addClickFeedback();
    }

    function currentIdentifier() {
        // prefer explicit marker: <body data-page="...">
        const bodyKey = document.body && document.body.getAttribute('data-page');
        if (bodyKey) return bodyKey;
        const name = location.pathname.split('/').pop() || 'index.html';
        return name;
    }

    function setActive() {
        const id = currentIdentifier();
        const links = document.querySelectorAll('#main-navbar .nav-link[data-key]');
        links.forEach(link => {
            link.classList.remove('active', 'fw-semibold', 'text-dark');
            const key = link.getAttribute('data-key') || link.getAttribute('href') || '';
            if (key === id || key.endsWith(id)) {
                link.classList.add('active', 'fw-semibold', 'text-dark');
            }
        });
    }

    function addClickFeedback() {
        // immediate visual feedback before navigation (useful on slow networks)
        const links = document.querySelectorAll('#main-navbar .nav-link[data-key]');
        links.forEach(a => {
            a.addEventListener('click', function () {
                links.forEach(x => x.classList.remove('active', 'fw-semibold', 'text-dark'));
                this.classList.add('active', 'fw-semibold', 'text-dark');
            }, { passive: true });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertNavbar);
    } else {
        insertNavbar();
    }
})();