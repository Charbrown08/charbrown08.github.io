$(document).ready(function () {
  const username = 'Charbrown08'
  const repoContainer = $('#repos')

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((repos) => {
      repos.slice(0, 6).forEach((repo) => {
        const repoHTML = `
                <div class="col-md-4 mb-4" data-aos="flip-left">
                    <div class="card h-100">
                        <img src="ruta/al/icono" class="card-img-top" alt="Icono del proyecto">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${
                              repo.description || 'Sin descripción'
                            }</p>
                            <a href="${
                              repo.html_url
                            }" class="btn btn-warning" target="_blank">Ver en GitHub</a>
                        </div>
                    </div>
                </div>`
        repoContainer.append(repoHTML)
      })
    })
    .catch((error) => console.error('Error al obtener los repos:', error))

  AOS.init({
    duration: 1200,
  })

  $('.card').on('mouseover', function () {
    $(this).css('box-shadow', '0 10px 20px rgba(0, 0, 0, 0.5)')
  })

  $('.card').on('mouseout', function () {
    $(this).css('box-shadow', 'none')
  })
})
