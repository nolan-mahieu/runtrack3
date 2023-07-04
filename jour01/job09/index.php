<!DOCTYPE html>
<html>
<head>
    <title>Tri des nombres</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Tri des nombres</h1>
    <button onclick="triTableau()">Trier le tableau</button>

    <table id="numbersTable">
        <thead>
            <tr>
                <th>Nombres</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $numbers = [5, 3, 8, 1, 2];
                foreach ($numbers as $number) {
                    echo "<tr><td>$number</td></tr>";
                }
            ?>
        </tbody>
    </table>
</body>
</html>
