$(document).ready(function () {
  const username = 'Charbrown08'
  const repoContainer = $('#repos')

  // Array de imágenes personalizadas para cada proyecto
  const images = [
    './images/git (2).png',
    './images/git (1).png',
    './images/git.png',
    './images/github.png',
    './images/git (3).png',
    './images/git (1).png',
  ]

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((repos) => {
      repos.slice(0, 6).forEach((repo, index) => {
        // Asigna una imagen del array
        const image = images[index % images.length]

        const repoHTML = `
                <div class="col-md-4 mb-4" data-aos="flip-left">
                    <div class="card h-100">
                        <img src="${image}" class="card-img-top project-img" alt="Imagen del proyecto">
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
