function calcular() {
        var a = Number(document.querySelector('input#a').value)
        var b = Number(document.querySelector('input#b').value)
        var c = Number(document.querySelector('input#c').value)

        var res = document.querySelector('div#res')
        var delta = (b**2)-(4*a*c)
            
        if (delta > 0) {
            var x1 = ((-b)-Math.sqrt(delta))/(2*a)
            var x2 = ((-b)+Math.sqrt(delta))/(2*a)
            var x1ap = x1.toFixed(2)
            var x2ap = x2.toFixed(2)

            res.innerHTML = `<p>X1 = ${x1ap} e X2 = ${x2ap}</p>` 
        } else if (delta == 0) {
            var x1 = (-b)/(2*a)
            var x1ap = x1.toFixed(2)

            res.innerHTML = `<p>delta = 0: valor de X = ${x1ap}</p>`
        } else {
            res.innerHTML = `<p>O valor de delta é menor que zero (&Delta; = ${delta})</p>`
        }
        console.log(a, b, c)
    }