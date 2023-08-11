(function hitokoto(){
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      var hitokoto = data.hitokoto;
      var creator = data.creator;

      var domHitokoto = document.querySelector('#hitokoto');
      var domCreator = document.querySelectorAll('#creator');

      Array.isArray(domHitokoto) ? domHitokoto[0].innerText = hitokoto : domHitokoto.innerText = hitokoto;
      if (domCreator.length > 0) {
        domCreator[0].innerText = creator;
      }
    })
    .catch(error => console.log(error));
})();