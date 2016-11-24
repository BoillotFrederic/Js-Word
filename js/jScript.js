var word =
{
  // Ajouter un mot
  add: function()
  {
    // Mot de l'utilisateur
    var word = prompt('Entrez un mot !');
    while(word.match(/^[0-9]+$/i) || word.trim() == '')
    word = prompt('La chaine ne doit pas être vide ou composé que de chiffre numérique !');

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
    cell.innerHTML = this.matchLength(word, '[eaiouy]') + 'v / ' + this.matchLength(word, '[^eaiouy0-9 ]') + 'c';

    // 5e transformation
    cell = row.insertCell();
    cell.innerHTML = this.inverse(word);

    // 6e transformation
    cell = row.insertCell();
    cell.innerHTML = (this.inverse(word).toLowerCase() == word.toLowerCase()) ? 'Est un palin' : 'Pas un palin';
  },

  // Voyelle/consonne
  matchLength: function(word, exp)
  {
    var exp = new RegExp(exp, 'gi');
    return word.match(exp) ? word.match(exp).length : 0;
  },

  // Inverser le mot
  inverse: function(word)
  {
    return word.split('').reverse().join('');
  }
}
