$(document).ready(function () {
  // Usar GitHub API para mostrar proyectos
  const username = 'Charbrown08'
  const repoContainer = $('#repos')

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((repos) => {
      repos.slice(0, 6).forEach((repo) => {
        const repoHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${
                              repo.description || 'Sin descripción'
                            }</p>
                            <a href="${
                              repo.html_url
                            }" class="btn btn-primary" target="_blank">Ver en GitHub</a>
                        </div>
                    </div>
                </div>`
        repoContainer.append(repoHTML)
      })
    })
    .catch((error) => console.error('Error al obtener los repos:', error))
})
