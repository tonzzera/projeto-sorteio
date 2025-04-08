document.addEventListener('DOMContentLoaded', () => {
    const btnInicial = document.getElementById('btnInicial');
    const sorteioArea = document.getElementById('sorteio-area');
    const resultadoDiv = document.getElementById('resultado');
    const sortearBtn = document.getElementById('sortearBtn');
    const parteDireita = document.getElementById('parte-direita');
  
    function sortearNumeros() {
      const qtd = parseInt(document.getElementById('num1').value);
      const min = parseInt(document.getElementById('num2').value);
      const max = parseInt(document.getElementById('num3').value);
      const repetir = !document.getElementById('toggleRepetir').checked;
  
      if (isNaN(qtd) || isNaN(min) || isNaN(max) || min >= max || qtd <= 0) {
        alert("Verifique os valores inseridos.");
        return;
      }
  
      let numeros = [];
      let tentativas = 0;
  
      while (numeros.length < qtd && tentativas < 10000) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (repetir || !numeros.includes(num)) {
          numeros.push(num);
        }
        tentativas++;
      }
  
      resultadoDiv.innerHTML = `
      <h2>Resultado:</h2>
      <div class="numeros">${numeros.join(', ')}</div>
    `;
    
    resultadoDiv.classList.remove('resultado-sorteio'); 
    void resultadoDiv.offsetWidth;
    resultadoDiv.classList.add('resultado-sorteio');
  
      // Esconde inputs, mostra resultado e botão "Sortear Novamente"
      document.querySelector('.style-inputs').style.display = 'none';
      document.querySelector('.part-right').style.display = 'none';
      document.querySelector('.margin').style.display = 'none';
      btnInicial.style.display = 'none';
      sorteioArea.style.display = 'flex';
    }
  
    btnInicial.addEventListener('click', sortearNumeros);
    sortearBtn.addEventListener('click', sortearNumeros);
  });
  