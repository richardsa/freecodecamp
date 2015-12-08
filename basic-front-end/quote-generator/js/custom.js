var quotes = [["I leave the mic in body bags, my rap style has The force to leave you lost like the tribe of Shabazz", "Inspectah Deck, 7th Chamber"], ["Ruler Zig-Zag-Zig Allah jam is fatal Quick to stick my Wu-Tang sword right through your navel", "RZA, 7th Chamber"], ["Well I'm a sire, I set the microphone on fire, Rap styles vary, Cary like Maria // My hip-hop will rock and shock the nation Like the Emancipation Proclamation", "U-God, Mystery of Chessboxin'"],["Huff? Puff? I'm gonna catch your bluff tuff Rough, kicking rhymes like Jim Kelly Or Alex Haley I'm a Mi-..Beetle Bailey rhymes", "Ol' Dirty Bastard, Mystery of Chessboxin'"]];
$(function() {
  $( "#quote-gen" ).click(function() {
    var x = Math.floor((Math.random() * quotes.length));
    var quote = quotes[x][0];
    var author = quotes[x][1];
    $("#quote-pad").empty();
    $("#quote-pad").append("<p class='quote-body'>" + quote + "</p>");
    $("#quote-pad").append("<h3 class='quote-attribution'>" + author + "</h3>");
    
  });
});
