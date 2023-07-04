function triTableau() {
    var numbersTable = document.getElementById("numbersTable");
    var numbers = [];
    var rows = numbersTable.getElementsByTagName("tr");
    
    for (var i = 1; i < rows.length; i++) {
        var cell = rows[i].getElementsByTagName("td")[0];
        numbers.push(parseInt(cell.textContent));
    }
    
    var order = "asc"; // or "desc" for descending order
    numbers = tri(numbers, order);
    
    for (var i = 1; i < rows.length; i++) {
        var cell = rows[i].getElementsByTagName("td")[0];
        cell.textContent = numbers[i - 1];
    }
}

function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    }
    
    return numbers;
}
