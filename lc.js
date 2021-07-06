var p1 = prompt("What is your name?");
var p2 = prompt("What is your Partner's name?");
var lScore= Math.random()*100;
lScore= Math.floor(lScore)+1;

if(lScore===100 || lScore>90){
  alert("Congratulations!!! "+p1+"&"+ p2+", Your Love Percentage is ~"+lScore+" | You are the true definition of love.");
}
else if (lScore>=80 && lScore<=90) {
  alert("That's almost close to perfect!!! "+p1+"&"+ p2+", Your Love Percentage is ~"+lScore+" | You can love each other more.");
}
else if (lScore>=70 && lScore<=80) {
  alert("Holly Molly!!! "+p1+"&"+ p2+", Your Love Percentage is ~"+lScore+" | Are you serious about your relationship status? ");
}
else if (lScore>=60 && lScore<=70) {
alert("Hmmmmmm !!!"+p1+"&"+ p2+", Your Love Percentage is ~"+lScore+" | Just keep loving each other more than this.");
}
else if (lScore>=50 && lScore<=60) {
alert("Ummmmmmm!!!"+p1+"&"+ p2+", Your Love Percentage is ~"+lScore+" | You need to put extra effort to save your relationship.");
}
else{
alert("Shit....!!!"+p1+"&"+ p2+", Your Love Percentage is ~"+lScore+" | You should focus on your career first.");
}
