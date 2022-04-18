const userSocialMedia = {
    github: "marlonballa",
    youtube: "UCFAd7NDgl2j9qA2pX49NUMg",
    instagram: "ballamarlon",
    facebook: "MarlonBalla07",
    twitter: "MarlonBalla"
  }

  function changeSocialMediaLinks() {
    //Forma tradicional de realizar a mudança
    //document.getElementById('userName').textContent = "Rogério Gabriel"

    //O JavaScript entende que um ID pode ser usado de forma direta para acessar modificadores do DOM.
    //userName.textContent = "Marlon"

    //O JavaScript permite que ao invés de números, utilizemos elementos da DOM como parâmetros do FOR. 
    //Neste caso estamos dizendo que para cada li filho da ul de ID="linksSocialMedia", acontecerá uma alteração. 
    for(let li of linksSocialMedia.children) {
      //guarda a classe referente a rede social que deve receber a alteração
      const socialMedia = li.getAttribute('class')
      //Entre na li pegue o primeiro filho e altere o conteúdo do atributo href
      li.children[0].href = `https://www.${socialMedia}.com/${userSocialMedia[socialMedia]}`
    } 
  }

  changeSocialMediaLinks();

  //FUNÇÃO RESPONSÁVEL POR IR AO GITHUB, PEGAR AS INFORMAÇÕES E INSERIR NO CRACHÁ.
  function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${userSocialMedia.github}`; 
    //O fetch busca na rota de uma api o conteúdo enviado por ela. 
    //Promisses: Permitem que "peguemos" a reposta de algo. .theb()
    fetch(url).then(response => 
        //Transforma o objeto que está guardado em response num JSON
        response.json()).then(data => {
          //Foto de Perfil
          imageProfile.src = data.avatar_url
          //Nome do usuário
          userName.textContent = data.name
          //Bio
          userBio.textContent = data.bio
          //Link para o perfil no github
          userGitHub.href = data.html_url
          //Nome de usuário do GitHub
          userLogin.textContent = data.login
        })
  }

  getGitHubProfileInfos(); 