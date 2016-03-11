// Plugin definition.
$.fn.mapDonutChart = function( options ) {

  // Extend our default options with those provided.
  // Note that the first argument to extend is an empty
  // object – this is to keep from overriding our "defaults" object.
  var opts = $.extend( {}, $.fn.mapDonutChart.defaults, options );

  // Our plugin implementation code goes here.

  return this.each(function() {
    // Plugin code would go here...

    var maxTotal = 0;
    for(var i in opts.data) {
      var t = opts.data[i].total;
      for(var j in opts.data[i].leads) {
        opts.data[i].leads[j].total = t;
        opts.data[i].leads[j].key = opts.data[i].name;
      }
      maxTotal = t > maxTotal ? t : maxTotal;
    }


    /**
     * register map
     */
    var map = new google.maps.Map(this, {
      zoom: 9,
      center: new google.maps.LatLng(opts.center.lat, opts.center.lng),
    });

    var overlay = new google.maps.OverlayView();

    var width = $(window).width();
    var height = $(window).height();

    var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) {
        return d.count;
      });


    /**
     * register arc for donut chart
     */
    var arc = d3.svg.arc()
      .outerRadius(function(lead) {
        var r = opts.max * lead.data.total / maxTotal;
        return r>20?r:20;
      })
      .innerRadius(function(lead) {
        var r = opts.max * lead.data.total / maxTotal;
        r = r*0.4;
        return r>8?r:8;
      });
      var circle = function(d) {
        var r = opts.max * d.total / maxTotal;
        r = r*0.4;
        return r>8?r:8;
      }

    var color = function(lead) {
      return opts.colors[lead.name] || '#ff0000'
    }

    overlay.onAdd = function() {
      var layer = d3
        .select(this.getPanes().overlayMouseTarget)
        .append("div")
        .attr("class", "stations")
        .style('position', 'absolute');

      overlay.draw = function() {
        layer.select('svg').remove();

        var projection = this.getProjection(),
          padding = 10;

        var svg = layer.append("svg")
          .attr('width', width)
          .attr('height', height)
          .style('position', 'absolute')
          .style('overflow', 'visible')
          ;

        var node = svg.selectAll(".stations")
          .data(opts.data)
          .enter()
          .append("g")
          .each(transform)
          .attr("class", "node");

        if(opts.hoverAction) {
          registerMouseOut(node);
        }

        var path = node.selectAll("path")
          .data(function (d) {
            return pie(d.leads);
          })
          .enter()
          .append("path")
          .attr("d", arc)
          .style("fill", function(lead, i) {
            return color(lead.data)
          });

        if(opts.hoverAction) {
          registerMouseHover(path, node);
        }

        if(opts.textLabel) {
          enableTextLabel(node);
        }

        node.append("circle")
          .attr("r", circle)
          .style("fill", '#ffffff')
          ;

        node.append("text")
          .text(function(d) {
            return d.total;
          })
          .attr("text-anchor", "middle")
          .attr("dy", ".35em")
          .attr("class", "node-total")
          .style('font-weight', 'bold')
          ;

        function registerMouseHover(path, node) {
          path.on("mouseover", function(obj){
            node.select("text.node-total")
            .text(function(d){
              if(obj.data.key == d.name) {
                return obj.data.count + '%';
              }

              return d.total;
            });
          })
        }

        function registerMouseOut(node) {
          node.on("mouseout", function(){
            node.select("text.node-total")
            .text(function(d){
              return d.total;
            });
          })
        }

        function enableTextLabel(node) {
          node.selectAll("text.node-label")
            .data(function (d) {
              return pie(d.leads);
            })
            .enter()
            .append("text")
            .attr("transform", function(d) {
              return "translate(" + arc.centroid(d) + ")";
            })
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .attr("class", "node-label")
            .text(function(d) {
              return d.data.count
            })
            ;
        }

        function latLongToPos(d) {
          var p = new google.maps.LatLng(d.location.lat, d.location.lng);
          p = projection.fromLatLngToDivPixel(p);
          p.x = p.x - padding;
          p.y = p.y - padding;
          return p;
        }

        function transform(d) {
          var p = latLongToPos(d);
          return d3.select(this)
            .attr("transform", "translate(" + p.x + "," + p.y + ")");
        }

      };
    };

    overlay.setMap(map);
  });
};

// Plugin defaults – added as a property on our plugin function.
$.fn.mapDonutChart.defaults = {
  max: 40,
  center: {
    lat: 28.8373639,
    lng: -82.0789857
  },
  textLabel: false,
  hoverAction: false,
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
  ],

  colors: {
    'cold': '#44C9F4',
    'warm': '#FBDB4F',
    'hot': '#F2463B',
  }
};
