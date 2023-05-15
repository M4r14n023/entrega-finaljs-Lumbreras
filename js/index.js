const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        // return alert('Usuario y/o contraseña incorrectos!')
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Usuario y/o contraseña incorrectos!',
            showConfirmButton: false,
            timer: 1500
          })
    }
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

Toast.fire({
    icon: 'success',
    title: (`Hola ${validUser.name}`)
}).then(() => {
    localStorage.setItem('login_success', JSON.stringify(validUser))
    // window.location.href = '../index.html'
    window.location.href = 'pages/pelisyseries.html'
})
})


