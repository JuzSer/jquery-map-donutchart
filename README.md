#Location charts
A kademi project


##Requirements
  - we've got a nice new lead management application, which allows sales consultants to manage their "leads", ie customers and deals
  - this is popular with businesses that have many different locations, eg car companies
  - what i would like is to give them a visualisation, so that the overall manager can see how all their locations are going
  - this will be a map, with donut charts placed on it for each location
  - see here for an example donut chart - http://nvd3.org/examples/pie.html
  - and we can use google maps for the map
  - the data will be available has json
  - and i would like this to be packeged in a jquery lib
  - something like this: http://easyterritory.com/images/featuresImages/CRMIntegration.png
  ![alt text](http://easyterritory.com/images/featuresImages/CRMIntegration.png "Something like this")
  - so the radius of the donut represents total leads. The segments of the donut are the percentage of leads in each stage, eg "cold", "warm", "hot"
  - I think that's all to get started. Please create a public github repo for the project. This can be standalone with a static json file, and we will integrate it with dynamic data in Kademi when your finished
  - Of course you config options for location of json file etc

## Config
  - `max` is Maximum radius of an item
  - `center` is lat, long center of map
  - `textLabel` default `false` is enable label for each item
  - `hoverAction` default `false` is enable action hover for donut chart

##Data
```
{
    max: 40,
    center: {
      lat: 28.8373639,
      lng: -82.0789857
    },
    textLabel: false,
    hoverAction: false,
    "data" : [
        {
            "name" : "Hong Kong",
            "location" : {
                "lat" : "123123132",
                "lng" : "12312313"
            },
            "total" : 124,
            "leads" : [
                {
                    "name" : "cold",
                    "count" : 20
                },
                {
                    "name" : "warm",
                    "count" : 60
                },
                {
                    "name" : "hot",
                    "count" : 20
                }
            ]
        },
        {
            "name" : "Sydney",
            "location" : {
                "lat" : "443123132",
                "lng" : "44312313"
            },
            "total" : 182,
            "leads" : [
                {
                    "name" : "cold",
                    "count" : 20
                },
                {
                    "name" : "warm",
                    "count" : 60
                },
                {
                    "name" : "hot",
                    "count" : 20
                }
            ]
        }
    ]
}
```

##Just type in command step by step:
1. npm install
2. bower install

So you are ready to rock. Very simple, huh?
