
module.exports=function(app,ebayClient){
    var mongoose=require('mongoose');
    var Product=mongoose.model('Product'); 
    var path=require('path');
    var aws=require('aws-lib');  



    var q=require('q');
    var deferred;




    app.post("/search/",findItemsFromAllProviders);


    function findItemsFromAllProviders (req,res){
        deferred=q.defer();
        var searching=req.body;
        var items=[];




        findItemsFromEbay(searching.searchValue)
            .then(successcallback);

        function successcallback(response){
            console.log("Lets see the data");
            amazonProductSearch(searching.searchValue).then(function(data){

                console.log("Responses");
                items= response.concat(data);


                deferred.resolve(res.json(items));


            },function(err){
                console.log("There is an error");
            });



        }
        return deferred.promise;

    }






    function findItemsFromEbay(searchItem)
    {
        deferred=q.defer();     

        ebayClient.finding(searchItem).then(function (res){

            var values=res.findItemsByKeywordsResponse[0].searchResult[0].item;

            var searchResult=storeToVendorsInternalProducts(values);

            deferred.resolve(searchResult);






        },function(err){
            deferred.reject(err);
        });
        return  deferred.promise;
    }


    function amazonProductSearch(searchItem){

        deferred=q.defer();
        var prodAdv=aws.createProdAdvClient("AKIAJRPFKZM2MPZTUCUA","6Ai1DkHB+t/1JhM4LNt+LOqvqoFdc/PsAUq0bZui","vnitsk-20");

        var options={SearchIndex:"All",Keywords:searchItem,ResponseGroup:"Images,ItemAttributes,ItemIds"};
        prodAdv.call("ItemSearch",options,function(err,result){
            if (err){
                deferred.reject(err); 
                console.log("Vinits Error"+err);
            }else{

                var searchResult=storeToVendorsInternalAmazonProducts(result.Items.Item);
                console.log("Cool 2"+JSON.stringify(result,null,4));
                deferred.resolve(searchResult);
            }


        });

        return deferred.promise;


    }










    function storeToVendorsInternalProducts(values)
    {      
        var products=[];
        var productItem={};

        for (var product in values)
        {

            productItem._id=values[product]["itemId"];
            productItem.title=values[product]["title"][0];

            productItem["name"]=values[product]["title"][0];
            productItem.manufacturer="";
            productItem.description=values[product]["title"][0];

            productItem.price=values[product]["sellingStatus"][0]["currentPrice"][0]["__value__"];//values[product]["sellingStatus"]["currentPrice"]["__value__"];
            productItem.discount="";
            productItem.providerId='10001';
            productItem.catalogId="";
            productItem.merchantId="";
            productItem["imageUrl"]=values[product]["galleryURL"][0];
            productItem.providerUrl="";


            products.push(productItem);
            productItem={};


        }

        return products;




    }



    function storeToVendorsInternalAmazonProducts(values)
    {      
        var products=[];
        var productItem={};
        var img;

        for (var product in values)
        {


            if (values[product]["MediumImage"])
            {
                img=values[product]["MediumImage"]["URL"];
            }
            else
            {
                img=""; 
            }
            console.log(JSON.stringify(values[product],null,4));
            productItem._id=values[product]["ASIN"];
            productItem.title=values[product]["ItemAttributes"]["Title"];

            productItem["name"]=values[product]["ItemAttributes"]["Title"];
            productItem.manufacturer="";
            productItem.description=values[product]["ItemAttributes"]["Title"];

            productItem.price="";//values[product]["sellingStatus"]["currentPrice"]["__value__"];
            productItem.discount="";
            productItem.providerId='10002';
            productItem.catalogId="";
            productItem.merchantId="";
            productItem["imageUrl"]=img;
            productItem.providerUrl="";


            products.push(productItem);
            productItem={};


        }

        return products;




    }



};










