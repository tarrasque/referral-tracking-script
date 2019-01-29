/***********************************************

Name: td_seo_clientname.js

Description: This file measures organic traffic for google and yahoo.


Last update: 20/11/2015

************************************************/



/***

Replace with your program information

- TDprogID: Replace with program ID

- TDaddID: Replace with graphical ID

- TDseoGoogle: Replace with Google SEO publisher ID

- TDseoYahoo: Replace with Yahoo SEO pubpublisher ID

***/

var TDprogID = '282511';

var TDaddID = '23958236';

var TDseoGoogle = '2971393';

var TDseoYahoo = '2971952';

var TDseoBing = '2971854';

var TDrefSuccovivo ='2971957';

var TDrefCuko = '2971960';

var TDrefZeroglu = '2971961';

var TDrefScaldasonno = '2971958';

var TDrefBellissima = '2971953';

var TDrefTenacta = '2971956';

var TDrefFeedaty = '2971963';

var TDrefCWS = '2971964';

var TDsnFacebook = '2971965';

var TDsnInstagram = '2971967';

var TDsnYoutube = '2971968';





/* DO NOT CHANGE FROM HERE*/

function GetURLParameter(sParam,referrer,sCharacter){

var sPageURL = referrer;

  var sURLVariables = sPageURL.split(sCharacter);

  for (var i = 0; i < sURLVariables.length; i++){

   var sParameterName = sURLVariables[i].split('=');

   if (sParameterName[0] == sParam)

     return sParameterName[1];

  }   

}



window.onload = function() {

var p_td = '', pubID = '', epi='', epi2 ='', sCharacter='';

var referer_td = document.referrer;


/*if referer contains something we analyze the content*/

if (referer_td != '') {

/*look for google in the referer*/

if (referer_td.indexOf("google") != -1){

/*does not contain 'aclk' (sem) so its seo */

if (referer_td.indexOf("aclk") == -1){

p_td = "url";

sCharacter = "&";

pubID = TDseoGoogle;

}


}

/*look for yahoo in the referer*/

else if (referer_td.indexOf("yahoo") != -1){

/*does not contain '?p=' (sem) so its seo*/

if (referer_td.indexOf("?p=") == -1){

p_td = "RU";

sCharacter = "/";

pubID = TDseoYahoo;

}

} else if (referer_td.indexOf("bing") != -1){

pubID = TDseoBing;

} else if (referer_td.indexOf("succovivo.imetec.com") != -1){

pubID = TDrefSuccovivo;

} else if (referer_td.indexOf("cuko.imetec.com") != -1){

pubID = TDrefCuko;

} else if (referer_td.indexOf("zeroglu.imetec.com") != -1){

pubID = TDrefZeroglu;

} else if (referer_td.indexOf("scaldasonno.imetec.com") != -1){

pubID = TDrefScaldasonno;

} else if (referer_td.indexOf("bellissima") != -1){

pubID = TDrefBellissima;

} else if (referer_td.indexOf("tenacta") != -1){

pubID = TDrefTenacta;

} else if (referer_td.indexOf("feedaty") != -1){

pubID = TDrefFeedaty;

} else if (referer_td.indexOf("crazywebshopping") != -1){

pubID = TDrefCWS;

} else if (referer_td.indexOf("facebook") != -1){

pubID = TDsnFacebook;

} else if (referer_td.indexOf("instagram") != -1){

pubID = TDsnInstagram;

} else if (referer_td.indexOf("youtube") != -1){

pubID = TDsnYoutube;

}


/*if we detect SEO then we need to fire the clk*/

if(pubID != ''){

/*

epi parameter we assign all the referer encoded,

epi2 parameter we look for a specific parameter in the referer

*/

epi = encodeURIComponent(referer_td);

epi2 = GetURLParameter(p_td,referer_td,sCharacter);

var imgTD = document.createElement('img');

imgTD.src = location.protocol +'//clk.tradedoubler.com/click?p='+ TDprogID +'&a='+ pubID +'&g='+ TDaddID + '&epi=' + epi + '&epi2=' + epi2;

imgTD.width = 0;

imgTD.height = 0;

imgTD.style.display = "none";

imgTD.style.visibility = "hidden";

document.body.appendChild(imgTD);

}

}

}
