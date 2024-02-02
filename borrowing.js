
document.getElementById("income").addEventListener("click",()=>{
    document.getElementById("err1").style.display="none";
})

document.getElementById("expenses").addEventListener("click",()=>{
    document.getElementById("err2").style.display="none";
})
      document.addEventListener('DOMContentLoaded', function() {
        const calculateBtn = document.getElementById('calculate-btn');
        const resultDiv = document.getElementById('result');
      
        calculateBtn.addEventListener('click', function() {
          const income = parseFloat(document.getElementById('income').value);
          const expenses = parseFloat(document.getElementById('expenses').value);
      if(!income)
      {
       document.getElementById("err1").style.display="block";
      return;
        }
        else if(!expenses){
        document.getElementById("err2").style.display="block";
        return;
        }
          // Add more variables and calculations as needed
      
          // Perform borrowing power calculation (example calculation)
          const borrowingPower = (income - expenses) * 5; // Simple example calculation
      
          // Display the result
          resultDiv.textContent = `Your borrowing power is $${borrowingPower}`;
        });
      });