 function calculo_Imc() {
            let valorPeso = document.getElementById("peso").value;
            let valorAltura = document.getElementById("altura").value;
            
            // Convertendo os valores para float
            let peso_Real = parseFloat(valorPeso);
            let altura_Real = parseFloat(valorAltura);

            // Verificando se os valores são válidos
            if(isNaN(peso_Real) || isNaN(altura_Real) || peso_Real <= 0 || altura_Real <= 0) {
                alert("Por favor, insira valores válidos para peso e altura.");
                return; // retorna se os valores não forem válidos

            }

        const imc = peso_Real / (altura_Real**2); 
           
            document.getElementById("resultado_Imc").innerText = imc.toFixed(2);
        }