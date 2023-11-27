const inputs = document.querySelectorAll('.controls input'); //esse aqui é um nodelist.
    //a diferença entre um array e nodelist é que se for olhar no prototype, o nodelist não vai
    //ter os métodos de filter, map, etc. Ele vai ter métodos como foreach. Às vezes é necessário
    //converter para array.

    function handleUpdate(){
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
      console.log(suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

    //um dataset vai pegar todas as propriedades DATA-alguma-coisa. Se tiver um data-legal="joinha"
    //ele vai colocar dentro de um objeto e vai juntar todos os outros datas que colocarmos