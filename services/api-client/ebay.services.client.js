module.exports=function(){
    var FIND_URL="http://svcs.ebay.com/services/search/FindingService/v1?";
var APP_ID="vinitkal-Vendors-PRD-2240e526c-d4139c49";
var request=require('request');  
var q=require('q');
var request=require('request');    
return {
    finding:finding
    
        
        
    };
    
    

    
    
    
  
  

    var test="Cool";
    
    
    
function finding(searchItem){
    var deferred=q.defer();
    var URL=FIND_URL;
    URL+="OPERATION-NAME=findItemsByKeywords";
    URL+="&SERVICE-NAME=FindingService";
    URL+="&SERVICE-VERSION=1.0.0";
    URL+="&GLOBAL-ID=EBAY-US";
    URL+="&SECURITY-APPNAME="+APP_ID;
    URL+="&RESPONSE-DATA-FORMAT=JSON";
    URL+="&REST-PAYLOAD";
    URL+="&keywords="+searchItem;
          console.log(URL);
    request(URL,function(error,response,body){
        if(!error){
            var res=JSON.parse(body);
            
            deferred.resolve(res);
        }
        else{
            
            deferred.reject(res);
            console.log("Rejected");
        }
        
        
    });
    
    
    return deferred.promise;
    
    
    
    
}    
    
    
    
function addItemsInVendors(){
    
    
    
}    
    
    
    
    

};

