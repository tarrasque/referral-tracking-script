/***********************************************
Name: td_seo_clientname.js
Description: This file measures organic traffic from more font of traffic.
Last update: 15/12/2018 Luca Galliani
************************************************/

/*
Setup data for TD Tech owner.
Replace with your program the follow information:

- TDprogID: Replace with program ID in use in TD Connect
- TDaddID: Replace with graphical ID

- TDseoXxx: Replace with SEO publisher ID assigned
- TDrefwebsite1: Replace with direct website ID assigned
- TDsnFacebook: Replace with social website ID assigned

*/

var TDprogID = '222222';
var TDaddID = '22222222';

var TDseoGoogle = '222221';
var TDseoYahoo = '222222';
var TDseoBing = '2222223';

var TDrefwebsite1 ='2222224';
var TDrefwebsite2 = '2222225';
var TDrefwebsite3 = '2222226';
var TDrefwebsite4 = '2222227';

var TDsnFacebook = '2222228';
var TDsnInstagram = '2222229';
var TDsnYoutube = '2222220';


/* DO NOT CHANGE FROM HERE */

function GetURLParameter(sParam,referrer,sCharacter){
	var sPageURL = referrer;
	var sURLVariables = sPageURL.split(sCharacter);
	for (var i = 0; i < sURLVariables.length; i++){
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam)
		  return sParameterName[1];
		}   
	}
window.onload = function(){
	var p_td = '', pubID = '', epi='', epi2 ='', sCharacter='';
	var referer_td = document.referrer; //if referrer contains something we analyze the content
	if (referer_td != ''){
      /*look for google in the referrer*/
		if (referer_td.indexOf("google") != -1){
			/*does not contain 'aclk' (sem) so its seo */
			if (referer_td.indexOf("aclk") == -1){
				p_td = "url";
				sCharacter = "&";
				pubID = TDseoGoogle;
				}
			}
			/*look for yahoo in the referrer*/
		else if (referer_td.indexOf("yahoo") != -1){
			/*does not contain '?p=' (sem) so its seo*/
			if (referer_td.indexOf("?p=") == -1){
				p_td = "RU";
				sCharacter = "/";
				pubID = TDseoYahoo;
				}
			} 
		else if (referer_td.indexOf("bing") != -1){
			pubID = TDseoBing;
			} 
			
			/* website referrals*/
			
		else if (referer_td.indexOf("website-1") != -1){
			pubID = TDrefwebsite1;
			} 
		else if (referer_td.indexOf("website-2") != -1){
			pubID = TDrefwebsite2;
			} 
		else if (referer_td.indexOf("website-3") != -1){
			pubID = TDrefwebsite3;
			} 
		else if (referer_td.indexOf("website-4") != -1){
			pubID = TDrefwebsite4;
			} 

			/* Social  */

		else if (referer_td.indexOf("facebook") != -1){
			pubID = TDsnFacebook;
			} 
		else if (referer_td.indexOf("instagram") != -1){
			pubID = TDsnInstagram;
			} 
		else if (referer_td.indexOf("youtube") != -1){
			pubID = TDsnYoutube;
			}
			/* if we detect the value then we need to fire the clk */
		if(pubID != ''){
			/*	epi parameter we assign all the referrer encoded, epi2 parameter we look for a specific parameter in the referrer */
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
