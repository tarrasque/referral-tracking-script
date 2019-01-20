var TDprogID = {
    "FR": {
        "prog_id": "289086",
        "graph_id": "24257944"
    },
    "DE": {
        "prog_id": "289084",
        "graph_id": "24257946"
    },
    "IT": {
        "prog_id": "288665",
        "graph_id": "24257948"
    },
    "NL": {
        "prog_id": "289088",
        "graph_id": "24257952"
    },
    "RO": {
        "prog_id": "289089",
        "graph_id": "24257956"
    },
    "ES": {
        "prog_id": "289087",
        "graph_id": "24257958"
    },
    "CH": {
        "prog_id": "289081",
        "graph_id": "24257960"
    },
    "UK": {
        "prog_id": "289085",
        "graph_id": "24257962"
    },
    "US": {
        "prog_id": "289080",
        "graph_id": "24257964"
    }
};

var TDSitesId = {
    "awin/affiliation": "3028021",
    "bing/organic": "3028049",
    "criteo/cpc": "3028016",
    "direct/none": "3028017",
    "endu/banner": "3028065",
    "endu/newsletter": "3028064",
    "facebook/cpc": "3028059",
    "facebook/link-post": "3028067",
    "facebook.com/referral": "3028061",
    "Facebook_Ads/FaceDynamic": "3025224",
    "google/cpc": "3028010",
    "google/organic": "3028013",
    "m.facebook.com/referral": "3028050",
    "maxinews/banner": "3028062",
    "newsletter/email": "3028015",
    "notifica_auto/email": "3028057",
    "referral/other": "3028066",
    "shopalike/cpc": "3028022",
    "stileo/cpc": "3028020",
    "stylight/cpc": "3028019",
    "trovaprezzi/cpc": "3028018",
    "yahoo/organic": "3028060"
};




/* DO NOT CHANGE FROM HERE*/
function getURLParameters(search){
    search = search.replace('?','') || '';

    var sURLVariables = search.split('&');
    var params = {};
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if(sParameterName.length>1) {
            params[sParameterName[0]] = sParameterName[1]
        }

    }
    return params;
}

function getCountryId() {
    var countryId = "" + Mage.Cookies.get("td_cname");
    if(countryId.length === 0 || countryId == 'null'){
        var d = new Date();
        d.setTime(d.getTime()+(30*24*60*60*1000));
        jQuery.ajax({
            url: "//freegeoip.net/json/",
            dataType: "json",
            async: false,
            timout: 2000
        }).done(function (data) {
            countryId = data.country_code;
            if(countryId){
                Mage.Cookies.set("td_cname",countryId,d);
            }
        });

    }
   // countryId = "" + Mage.Cookies.get("td_cname");
    //console.log(countryId);
    return countryId;

}


window.onload = function() {
    var epi='', epi2 ='';
    var refererTd = document.referrer;
    //console.log(refererTd);

    var params = getURLParameters(document.location.search);
    //console.log(params);
    var utmSource =  params['utm_source'];
    var utmMedium =  params['utm_medium'];
    var utmCampaign =params['utm_campaign'];
    var gclid = params['gclid'];
    utmSource = (typeof utmSource === 'undefined' || utmSource === null)?'':utmSource;
    utmMedium = (typeof utmMedium === 'undefined' || utmMedium === null)?'':utmMedium;
    utmCampaign = (typeof utmCampaign === 'undefined' || utmCampaign === null)?'':utmCampaign;
    gclid = (typeof gclid === 'undefined' || gclid === null)?'':gclid;
    var key = "";
    var siteId = null;
    if(utmSource.length > 0 && utmMedium.length > 0){
        key = utmSource+'/'+utmMedium;
        siteId = TDSitesId[key];
    }
    if(gclid.length > 0){
        siteId = TDSitesId['google/cpc'];
    }
    if(refererTd.length > 0 &&( key.length === 0 || siteId === null || typeof siteId === 'undefined')){
        if(refererTd.indexOf("m.facebook.com") >= 0){
            key = "m.facebook.com/referral";
        }else if (refererTd.indexOf("facebook.com") >= 0){
            key = "facebook.com/referral";
        }else if (refererTd.indexOf("google") >= 0){
            key = "google/organic";
        }else if (refererTd.indexOf("maxisport.com") < 0){
            key = "referral/other";
        }
        siteId = TDSitesId[key];
    }
    if(siteId === null || typeof siteId === 'undefined'){
        siteId = TDSitesId['direct/none'];
    }
    var countryId = getCountryId();
    if(countryId.length === 0){
        countryId = 'IT';
    }
    var progsData = null;
    progsData = TDprogID[countryId];
    if(progsData === null || typeof progsData === 'undefined'){
        progsData = TDprogID['IT'];
    }
   // console.log(siteId);
   // console.log(progsData);


    if(siteId != null){
        /*
         epi parameter we assign all the referer encoded,
         epi2 parameter we look for a specific parameter in the referer
         */
        epi = encodeURIComponent(refererTd);
        epi2 = utmCampaign;
        var imgTD = document.createElement('img');
        imgTD.src = location.protocol +'//clk.tradedoubler.com/click?p='+ progsData['prog_id'] +'&a='+ siteId +'&g='+ progsData['graph_id'] + '&epi=' + epi + '&epi2=' + epi2;
        imgTD.width = 0;
        imgTD.height = 0;
        imgTD.style.display = "none";
        imgTD.style.visibility = "hidden";
        document.body.appendChild(imgTD);
   //     console.log(imgTD.src)
    }

}
