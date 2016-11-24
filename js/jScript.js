var word =
{
  // Ajouter un mot
  add: function()
  {
    // Mot de l'utilisateur
    var word = prompt('Entrez un mot !');

    // Le tableau HTML
    var tab = document.getElementsByTagName('table')[0];
    var row = tab.insertRow();
    var cell;

    // 1ère transformation
    cell = row.insertCell();
    cell.innerHTML = word;
    cell.style.fontWeight = 'bold';
    cell.style.color = 'red';

    // 2e transformation
    cell = row.insertCell();
    cell.innerHTML = word.toLowerCase();

    // 3e transformation
    cell = row.insertCell();
    cell.innerHTML = word.toUpperCase();

    // 4e transformation
    cell = row.insertCell();
    cell.innerHTML = word.match(/[eaiouy]/g).length + 'v /' + word.match(/[^eaiouy]/g).length + 'c';

    // 5e transformation
    cell = row.insertCell();
    cell.innerHTML = this.inverse(word);

    // 6e transformation
    cell = row.insertCell();
    cell.innerHTML = (this.inverse(word).toLowerCase() == word.toLowerCase()) ? 'Est un palin' : 'Pas un palin';
  },

  // Inverser un mot
  inverse: function(word)
  {
    for (var wordInverse = '', i = (word.length  - 1); i >= 0; i--)
    wordInverse += word[i];

    return wordInverse;
  }
}
