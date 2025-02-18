function calcular() {
    const K = 8.9875 * Math.pow(10, 9);
    const Q1 = parseFloat(document.getElementById('Q1').value);
    const Q2 = parseFloat(document.getElementById('Q2').value); 
    const D = parseFloat(document.getElementById('D').value);
    
    const result = K * Math.abs(Q1 * Q2) / Math.pow(D, 2);
    
    document.getElementById('result').innerText = result.toExponential(2);
}