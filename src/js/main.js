
(function(window, $){
    var $doc = $(document);
    var $body = $('body');

    var config = {
      sleepTime: 500,
    }

    // Common functions
    var App = {

      /**
       * main function
       * init application
       */
      init: function() {
        $('.map-donutchart').mapDonutChart({
          max: 40,
          center: {
            lat: 28.8373639,
            lng: -82.0789857
          },
          textLabel: false,
          hoverAction: true,
          data: [
            {
              "name" : "Hong Kong",
              "location" : {
                "lat" : "28.34215",
                "lng" : "-81.2617837"
              },
              "total" : 214,
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
                "lat" : "29.34215",
                "lng" : "-81.9617837"
              },
              "total" : 282,
              "leads" : [
                {
                    "name" : "cold",
                    "count" : 10
                },
                {
                    "name" : "warm",
                    "count" : 30
                },
                {
                    "name" : "hot",
                    "count" : 60
                }
              ]
            },
            {
              "name" : "Inverd",
              "location" : {
                "lat" : "28.74215",
                "lng" : "-81.8617837"
              },
              "total" : 280,
              "leads" : [
                {
                    "name" : "cold",
                    "count" : 10
                },
                {
                    "name" : "warm",
                    "count" : 30
                },
                {
                    "name" : "hot",
                    "count" : 60
                }
              ]
            },
            {
              "name" : "Leesbug",
              "location" : {
                "lat" : "28.04215",
                "lng" : "-81.0617837"
              },
              "total" : 210,
              "leads" : [
                {
                    "name" : "cold",
                    "count" : 10
                },
                {
                    "name" : "warm",
                    "count" : 30
                },
                {
                    "name" : "hot",
                    "count" : 60
                }
              ]
            },
            {
              "name" : "Orlando",
              "location" : {
                "lat" : "28.04215",
                "lng" : "-82.7617837"
              },
              "total" : 300,
              "leads" : [
                {
                    "name" : "cold",
                    "count" : 10
                },
                {
                    "name" : "warm",
                    "count" : 30
                },
                {
                    "name" : "hot",
                    "count" : 60
                }
              ]
            },
            {
              "name" : "London",
              "location" : {
                "lat" : "29.04215",
                "lng" : "-82.7617837"
              },
              "total" : 100,
              "leads" : [
                {
                    "name" : "cold",
                    "count" : 10
                },
                {
                    "name" : "warm",
                    "count" : 30
                },
                {
                    "name" : "hot",
                    "count" : 60
                }
              ]
            },
            {
              "name" : "Alaska",
              "location" : {
                "lat" : "28.14215",
                "lng" : "-80.9617837"
              },
              "total" : 12,
              "leads" : [
                {
                    "name" : "cold",
                    "count" : 10
                },
                {
                    "name" : "warm",
                    "count" : 30
                },
                {
                    "name" : "hot",
                    "count" : 60
                }
              ]
            }
          ],

          colors: {
            'cold': '#44C9F4',
            'warm': '#FBDB4F',
            'hot': '#F2463B',
          }
        });
        this.registerEvent();
      },

      /**
       * register event listener
       */
      registerEvent: function() {
        var _self = this;
      },
    };

    // Make it global
    window.App = App;
})(window, jQuery);

$(function() {
  App.init();
});

