!function(n){"use strict";function t(e){for(var t=0,n=s.length;t<n;t++)if(s[t].src===e)return s[t].loaded?a.SCRIPT_LOAD_STATUS.LOADED:a.SCRIPT_LOAD_STATUS.LOADING;return a.SCRIPT_LOAD_STATUS.NOT_READY}var r=-1<location.host.indexOf("local")&&!0,e=document.querySelector("script[data-gtm-id]"),o={GTM_ID:e.getAttribute("data-gtm-id"),BANNED_SOURCES:JSON.parse(atob(e.getAttribute("data-banned-sources"))),ACCOUNT_GATEWAY_URL:e.getAttribute("data-account-gw-url"),CHANNEL_ID:e.getAttribute("data-channel-id")||"1",VARIABLES:JSON.parse(atob(e.getAttribute("data-vars"))).map(function(e){return window[e]||{}}),PAGE_VARIABLES:JSON.parse(atob(e.getAttribute("data-storefront-vars"))),DATALAYER_VARIABLE_NAME:e.getAttribute("data-datalayer-variable-name")||"dataLayer"},a={DEFAULT_GTM_MODEL:{google_tag_params:{brand:null,bu:null,butikid:null,cardsaved:null,fastdelivery:null,gender:null,membertype:null,pagetype:null,pcat:null,pname:null,prodid:null,pvalue:null},event:"initial_data",boutique_bu:null,boutique_name:null,boutique_status:null,boutique_closingdate:null,boutique_startdate:null,boutique_id:null,collection_id:null,other_abtestrandomvalue:null,other_abtestrandomvalue1:null,other_abtestrandomvalue2:null,other_abtestrandomvalue3:null,other_abtestrandomvalue4:null,other_abtestrandomvalue5:null,page_brand:null,page_type:null,page_previouspagetype:null,page_section:null,page_event:null,page_dl:null,page_dp:null,page_category:null,page_filters:null,page_checkoutpagetype:null,page_newmobile:null,product_productid:null,breadcrumb:null,product_pname:null,product_categoryname:null,product_cat_tree:null,product_sku:null,product_gendertype:null,product_brand:null,product_color:null,product_merchant:null,product_size:null,product_availablesizescatbased:null,product_code:null,product_tax:null,product_boutiqueid:null,product_id:null,product_price:null,product_original_price:null,product_discounted_price:null,product_quantity:null,product_status:null,product_shipmenttype:null,product_pvalue:null,product_contentid:null,product_merchantid:null,product_itemnumber:null,site_type:null,site_zone:null,site_storefront:null,site_language:null,site_culture:null,site_currency:null,site_portion:null,site_storefrontId:null,transaction_affiliation:null,transaction_id:null,transaction_net:null,transaction_shipping:null,transaction_tax:null,transaction_total:null,transaction_unitprices:null,transaction_discount:null,transaction_discountused:null,transaction_orderid:null,transaction_promo:null,transaction_coupon:null,transaction_lateinterest:null,transaction_method:null,transaction_basketvalue:null,transaction_basketamountraw:null,transaction_basketamountfull:null,transaction_installmentnumber:null,transaction_maturitydifference:null,transaction_bank:null,transaction_cardtype:null,user_appuser:null,user_email:null,user_creditcardsaved:null,user_cookiegender:null,user_dbgender:null,user_creditcardcount:null,user_db_size_catbased:null,"user_cookie_size-catbased":null,user_customerid:null,user_memberstatus:null,user_buyerstatus:null,user_customertype:null,user_email2:null,user_pid:null,user_sid:null,user_email_unhashed:null,user_membertype:null,user_segments:null,app_standalone:null,first_render_time:null,product_listingid:null,isSlp:null,slpName:null},SCRIPT_LOAD_STATUS:{LOADING:"LOADING",LOADED:"LOADED",NOT_READY:"NOT_READY"}},s=[];function u(e,t){this.src=t,this.cb=e,this.loaded=!t,this.init()}u.prototype.init=function(){if(this.src){var e=t(this.src);e===a.SCRIPT_LOAD_STATUS.LOADED?this.executeCallback():e===a.SCRIPT_LOAD_STATUS.LOADING?this.waitForSource():this.loadExternal(this.executeCallback.bind(this))}else this.executeCallback()},u.prototype.waitForSource=function(){var e=this;setTimeout(function(){t(e.src)===a.SCRIPT_LOAD_STATUS.LOADED?e.executeCallback():e.waitForSource()},10)},u.prototype.loadExternal=function(e){var t,n,r=this;(t=document.createElement("script")).type="text/javascript",t.src=r.src,t.onload=t.onreadystatechange=function(){r.loaded||t.readyState&&"complete"!==t.readyState||(r.loaded=!0,e&&e())},(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,n)},u.prototype.handleError=function(e){var t=this.src?this.src:"Unknown";throw new Error("3rdParty:"+t+", "+e)},u.prototype.executeCallback=function(){var t=this;setTimeout(function(){try{t.cb()}catch(e){t.handleError(e)}},0)};function l(e){window[o.DATALAYER_VARIABLE_NAME].push(e)}var i=null;function c(){var t,n=o.PAGE_VARIABLES.site_storefrontId;try{var e=localStorage.getItem("userDataLayerInfo");if(e&&(t=JSON.parse(e)),!n){var r=this.parseCookiesToObject(document.cookie);r.storefrontId&&(n=Number(r.storefrontId.replace(/\"/g,"")))}}catch(e){t={},n=1}i=a.DEFAULT_GTM_MODEL,window[o.DATALAYER_VARIABLE_NAME]=[Object.assign(i,o.PAGE_VARIABLES,t,{site_storefrontId:n,channel:"MobileWeb"})]}c.prototype.appendGTMScript=function(){!function(e,t,n,r,a){e[r]=e[r]||[],e[r].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var o=t.getElementsByTagName(n)[0],s=t.createElement(n),u="dataLayer"!=r?"&l="+r:"";s.async=!0,s.src="//www.googletagmanager.com/gtm.js?id="+a+u,o.parentNode.insertBefore(s,o)}(window,document,"script",o.DATALAYER_VARIABLE_NAME,o.GTM_ID)},c.prototype.update=function(e,t){for(var n in t||(i=Object.keys(a.DEFAULT_GTM_MODEL).reduce(function(e,t){return e[t]=a.DEFAULT_GTM_MODEL[t],e},{})),e)e.hasOwnProperty(n)&&(a.DEFAULT_GTM_MODEL.hasOwnProperty(n)?i[n]=e[n]:console.warn("Can't set "+n+", because it is not defined on DEFAULT_GTM_MODEL"));r&&console.log(i),l(i)},c.prototype.execute=function(e,t){s.push(new u(e,t))},c.prototype.event=function(e,t){if(e&&void 0!==e){var n={event:e};if(t)for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);l(n)}},c.prototype.detectStandalone=function(){return window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches||"standalone"in window.navigator&&window.navigator.standalone},c.prototype.updateVars=function(e,t){var n=o.VARIABLES.reduce(function(e,t){return Object.assign(e,t)},o.PAGE_VARIABLES);n.page_dl=window.location.href,n.page_dp=window.location.pathname,this.detectStandalone()&&(n.app_standalone=!0),t(Object.assign(e,n))},c.prototype.updatePreviousPageType=function(e,t){var n=o.VARIABLES.reduce(function(e,t){return Object.assign(e,t)},o.PAGE_VARIABLES),r=n.page_previouspagetype|[];try{var a=JSON.parse(sessionStorage.getItem("stateHistory"))||[];r=1<a.length?a[a.length-2].page_type:null}catch(e){}n.page_previouspagetype=r,t(Object.assign(e,n))},c.prototype.userSegmentsHandler=function(t,n){var e=sessionStorage.getItem("userSegments");e?(t.user_segments=JSON.parse(e),n(t)):this.getUserSegments(!1,function(e){e&&(t.user_segments=e),n(t)})},c.prototype.getUserSegments=function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState)if(n.readyState===XMLHttpRequest.DONE)if(n.responseText&&""!==n.responseText){var e=JSON.parse(n.responseText);null!=e?(sessionStorage.setItem("userSegments",JSON.stringify(e)),t(e)):t(null)}else t(null);else t(null)},n.open("GET",o.ACCOUNT_GATEWAY_URL+"/api/user/getUserSegments",!0),n.withCredentials=!0,n.send(null)},c.prototype.userDataLayerHandler=function(o,s){var e=localStorage.getItem("userDataLayerInfo"),t=localStorage.getItem("userDataLayerUser"),n=localStorage.getItem("userDataLayerExpireDate"),u=new Date,r=this.parseCookiesToObject(document.cookie).sid,a=sessionStorage.getItem("sid_old");e&&t&&n&&parseInt(n,10)>=u.getTime()&&r==a?(window.__user_datalayer=JSON.parse(e),window.user=JSON.parse(t),this.mapDataLayerUserInfo(window.__user_datalayer,o),s(o)):(sessionStorage.setItem("sid_old",r),this.getUserData(function(e,t,n,r,a){e||(window.__user_datalayer=t,window.user=n,this.mapDataLayerUserInfo(t,o),this.setUserInfoCookie(n,r,a),localStorage.setItem("userDataLayerInfo",JSON.stringify(t)),localStorage.setItem("userDataLayerUser",JSON.stringify(n)),localStorage.setItem("userDataLayerExpireDate",JSON.stringify(u.setMinutes(u.getMinutes()+30))),s(o))}.bind(this)))},c.prototype.getUserData=function(t){fetch(o.ACCOUNT_GATEWAY_URL+"/api/user/datalayer-info?channelId="+o.CHANNEL_ID,{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(e){e&&e.userDataLayerInfo&&e.user&&e.cookieExpireDate&&t(!1,e.userDataLayerInfo,e.user,e.cookieExpireDate,e.cookieDomain)}).catch(function(){t(!0)})},c.prototype.mapDataLayerUserInfo=function(e,t){t.user_appuser=e.user_appuser,t.user_email=e.user_email,t.user_creditcardsaved=e.user_creditcardsaved,t.user_cookiegender=e.user_cookiegender,t.user_dbgender=e.user_dbgender,t.user_creditcardcount=e.user_creditcardcount,t.user_db_size_catbased=e.user_db_size_catbased,t["user_cookie_size-catbased"]=e["user_cookie_size-catbased"],t.user_customerid=e.user_customerid,t.user_memberstatus=e.user_memberstatus,t.user_buyerstatus=e.user_buyerstatus,t.user_customertype=e.user_customertype,t.user_email2=e.user_email2,t.user_pid=e.user_pid,t.user_sid=e.user_sid,t.user_membertype=e.user_membertype,t.user_segments=e.user_segments},c.prototype.setUserInfoCookie=function(e,t,n){if(e){var r=this.parseCookiesToObject(document.cookie),a=r&&r.UserInfo?this.parseCookiesToObject(r.UserInfo):null,o=a?a.GenderId:null,s=e?e.userInfo:{},u=encodeURIComponent(JSON.stringify({Gender:s.ForceSet?o:e.genderId,UserTypeStatus:e.userTypeStatusId,ForceSet:s.ForceSet||!1})),l=t?"; expires="+t:"",i=n?"; domain="+n:"; domain=."+window.location.hostname;document.cookie="UserInfo="+u+l+i+"; path=/; SameSite=Lax; Secure"}},c.prototype.parseCookiesToObject=function(e){var n={};e&&decodeURIComponent(e).split("; ").forEach(function(e){var t=e.split("=");1<t.length&&(n[t[0]]=t[1])});return n},c.prototype.fetchUserInfo=function(e,t){t(e)},"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var a=arguments[r];if(null!=a)for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])}return n},writable:!0,configurable:!0}),c.prototype.bootstrap=function(t){var n=this,r=function(e){0<t.length?t.shift().bind(n)(e,r):n.update(e,!1)};r({})},c.prototype.calculateRenderTime=function(e,t){window.addEventListener("load",function(e){setTimeout(function(){if(window.performance&&window.performance.getEntriesByType&&n.GTMService)try{var e=window.performance.getEntriesByType("paint");n.GTMService.event("first_render",{ms:e[1].startTime})}catch(e){}},500)}),t(e)},c.prototype.updateUserCustomerId=function(e,t){try{var n=localStorage.getItem("lastLoggedInUserId");window.__user_datalayer.user_customerid?n&&parseInt(n)===window.__user_datalayer.user_customerid||localStorage.setItem("lastLoggedInUserId",window.__user_datalayer.user_customerid):n&&(e.user_customerid=parseInt(n))}catch(e){}t(Object.assign({},e))},c.prototype.updateEventProperty=function(e,t){e.event="loaded_data",t(e)},n.GTMService=new c,n.GTMService.appendGTMScript(),n.GTMService.bootstrap([c.prototype.updateVars,c.prototype.updatePreviousPageType,c.prototype.calculateRenderTime,c.prototype.updateUserCustomerId,c.prototype.userDataLayerHandler,c.prototype.updateEventProperty])}(window);