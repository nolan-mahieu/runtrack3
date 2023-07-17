function filtrerDonnees() {
    var id = document.getElementById("id").value;
    var nom = document.getElementById("nom").value;
    var type = document.getElementById("type").value;
  
    fetch('pokemon.json')
      .then(response => response.json())
      .then(data => filtrerPokemon(data, id, nom, type))
      .catch(error => console.log(error));
  }
  
  function filtrerPokemon(data, id, nom, type) {
    var resultatDiv = document.getElementById("resultat");
    resultatDiv.innerHTML = ""; // Efface le contenu précédent
  
    var resultat = data.filter(function(pokemon) {
      return (
        (id === '' || pokemon.id.toString() === id) &&
        (nom === '' || pokemon.name.english.toLowerCase().includes(nom.toLowerCase())) &&
        (type === '' || pokemon.type.includes(type))
      );
    });
  
    if (resultat.length === 0) {
      resultatDiv.innerHTML = "Aucun Pokémon trouvé.";
      return;
    }
  
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
  
    var trHead = document.createElement("tr");
    var thId = document.createElement("th");
    thId.textContent = "ID";
    var thNomEnglish = document.createElement("th");
    thNomEnglish.textContent = "Nom (Anglais)";
    var thNomJapanese = document.createElement("th");
    thNomJapanese.textContent = "Nom (Japonais)";
    var thNomChinese = document.createElement("th");
    thNomChinese.textContent = "Nom (Chinois)";
    var thNomFrench = document.createElement("th");
    thNomFrench.textContent = "Nom (Français)";
    var thType = document.createElement("th");
    thType.textContent = "Type";
    var thHP = document.createElement("th");
    thHP.textContent = "HP";
    var thAttack = document.createElement("th");
    thAttack.textContent = "Attaque";
    var thDefense = document.createElement("th");
    thDefense.textContent = "Défense";
    var thSpAttack = document.createElement("th");
    thSpAttack.textContent = "Sp. Attaque";
    var thSpDefense = document.createElement("th");
    thSpDefense.textContent = "Sp. Défense";
    var thSpeed = document.createElement("th");
    thSpeed.textContent = "Vitesse";
  
    trHead.appendChild(thId);
    trHead.appendChild(thNomEnglish);
    trHead.appendChild(thNomJapanese);
    trHead.appendChild(thNomChinese);
    trHead.appendChild(thNomFrench);
    trHead.appendChild(thType);
    trHead.appendChild(thHP);
    trHead.appendChild(thAttack);
    trHead.appendChild(thDefense);
    trHead.appendChild(thSpAttack);
    trHead.appendChild(thSpDefense);
    trHead.appendChild(thSpeed);
    thead.appendChild(trHead);
    table.appendChild(thead);
  
    resultat.forEach(function(pokemon) {
      var tr = document.createElement("tr");
      var tdId = document.createElement("td");
      tdId.textContent = pokemon.id;
      var tdNomEnglish = document.createElement("td");
      tdNomEnglish.textContent = pokemon.name.english;
      var tdNomJapanese = document.createElement("td");
      tdNomJapanese.textContent = pokemon.name.japanese;
      var tdNomChinese = document.createElement("td");
      tdNomChinese.textContent = pokemon.name.chinese;
      var tdNomFrench = document.createElement("td");
      tdNomFrench.textContent = pokemon.name.french;
      var tdType = document.createElement("td");
      tdType.textContent = pokemon.type.join(", ");
      var tdHP = document.createElement("td");
      tdHP.textContent = pokemon.base.HP;
      var tdAttack = document.createElement("td");
      tdAttack.textContent = pokemon.base.Attack;
      var tdDefense = document.createElement("td");
      tdDefense.textContent = pokemon.base.Defense;
      var tdSpAttack = document.createElement("td");
      tdSpAttack.textContent = pokemon.base["Sp. Attack"];
      var tdSpDefense = document.createElement("td");
      tdSpDefense.textContent = pokemon.base["Sp. Defense"];
      var tdSpeed = document.createElement("td");
      tdSpeed.textContent = pokemon.base.Speed;
  
      tr.appendChild(tdId);
      tr.appendChild(tdNomEnglish);
      tr.appendChild(tdNomJapanese);
      tr.appendChild(tdNomChinese);
      tr.appendChild(tdNomFrench);
      tr.appendChild(tdType);
      tr.appendChild(tdHP);
      tr.appendChild(tdAttack);
      tr.appendChild(tdDefense);
      tr.appendChild(tdSpAttack);
      tr.appendChild(tdSpDefense);
      tr.appendChild(tdSpeed);
      tbody.appendChild(tr);
    });
  
    table.appendChild(tbody);
    resultatDiv.appendChild(table);
  }
  