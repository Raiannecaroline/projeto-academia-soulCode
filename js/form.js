  const form = document.getElementById('form');
  const username = document.getElementById('username');
  const menssagem = document.getElementById('menssagem');

  form.addEventListener('submit', (e) => {
      e.preventDefault()


      checkInputs()

  })



  function checkInputs() {
      //obter o valor da entrada
      const usernameValue = username.value.trim();
      const menssagemValue = menssagem.value.trim();


      if (usernameValue === '') {

          errorValidation(username, 'Preencha esse campo')
      } else {

          successValidation(username)

      }

      if (menssagemValue === '') {
          errorValidation(menssagem, 'Preencha a caixa de menssagem')
      } else {
          successValidation(menssagem)
      }

  }

  function errorValidation(input, message) {
      const formControl = input.parentElement; // .form-control
      const small = formControl.querySelector('small')


      small.innerText = message



      formControl.className = 'form-control error'
  }

  function successValidation(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success'
  }