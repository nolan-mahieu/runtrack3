/**
 Créez une fonction javascript “jsonValueKey()” qui prend en paramètre une
 chaîne de caractères au format json et une clé. Cette fonction retourne la
 valeur liée à cette clé dans la chaîne de caractères. Par exemple si la
 string passée en paramètre est “{name: "La Plateforme_", address: "8 rue
d'hozier", city: "Marseille", nb_staff: "11", creation:"2019"}” et la clé est
 “city”, la fonction retourne “Marseille”.
 */
 const json = '{ "name": "La Plateforme_", "address": "8 rue dhozier", "city": "Marseille", "nb_staff": 11, "creation": 2019 }';
 const obj = JSON.parse(json);
 console.log(obj.name);
 
 function jsonValueKey(json, key) {
     const obj = JSON.parse(json);
     return obj[key];
 }
 
 console.log(jsonValueKey(json, "city"));
 