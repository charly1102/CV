/* Muestra fecha en el pie de página */
const f = new Date()
document.getElementById('footer').innerHTML = f.toDateString()

/* Habilita la sección del artículo correspondiente al Home */
document.getElementById('home').addEventListener('click', function () {
    document.getElementById('Ho').style.display = 'block'
    document.getElementById('IP').style.display = 'none'
    document.getElementById('Ex').style.display = 'none'
    document.getElementById('Hab').style.display = 'none'
});

/* Habilita la sección del artículo correspondiente a la Información personal */
document.getElementById('ip').addEventListener('click', function () {
    document.getElementById('Ho').style.display = 'none'
    document.getElementById('IP').style.display = 'block'
    document.getElementById('Ex').style.display = 'none'
    document.getElementById('Hab').style.display = 'none'
});

 /* Habilita la sección del artículo correspondiente a la Experiencia */
document.getElementById('exp').addEventListener('click', function () {
    document.getElementById('Ho').style.display = 'none'
    document.getElementById('IP').style.display = 'none'
    document.getElementById('Ex').style.display = 'block'
    document.getElementById('Hab').style.display = 'none'
});

 /* Habilita la sección del artículo correspondiente a las Habilidades */
document.getElementById('hab').addEventListener('click', function () {
    document.getElementById('Ho').style.display = 'none'
    document.getElementById('IP').style.display = 'none'
    document.getElementById('Ex').style.display = 'none'
    document.getElementById('Hab').style.display = 'block'
});

/* Enlace con la APi generadora de datos de personas ficticias */
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => mostrarData(data))

/* Muestra datos personales de los usuarios aleatorios */
const mostrarData = (data) => {
    console.log(data)
    let nombre = "Hola, me llamo " + data.results[0].name.first
    let foto = document.getElementById("foto")
    let d = new Date(data.results[0].dob.date)
    let correo = data.results[0].email
    let nac = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear()
    let body = "Me llamo " + data.results[0].name.first + " " + data.results[0].name.last + ". Nací el " + nac + " . Tengo " + data.results[0].dob.age + " años"
    let dire = "Me domicilio en " + data.results[0].location.street.name + " " + data.results[0].location.street.number + ", en la ciudad de " + data.results[0].location.city + ", en el estado de  " + data.results[0].location.state + " (" + data.results[0].location.postcode + ")"
    let mail = "E-mail: " + correo.link("mailto:" + correo) + " - Teléfono: " + data.results[0].phone + " - Celular: " + data.results[0].cell
    let fotoip = document.getElementById('foto-ip')

    foto.src = data.results[0].picture.large
    document.getElementById('hom').innerHTML = nombre
    document.getElementById('nya').innerHTML = body
    document.getElementById('dire').innerHTML = dire
    document.getElementById('mail').innerHTML = mail
    fotoip.src = data.results[0].picture.medium
}