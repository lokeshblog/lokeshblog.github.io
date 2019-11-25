
function icon()
{
  document.getElementById("showm").style.display="none";
}

    var order = [];
    var cost = 0;
    function show() {
        document.getElementById("showm").style.display = "block";
        alert(order);
        var i = 0;
        for (i = 0; i < order.length; i++) {
                $("#result").append("<br>Name :"+order[i][1]+"  Price: "+order[i][0]);
                
        }
        for(i=0;i<order.length;i++)
        {
            cost = cost + +order[i][0];
           
        }
        document.getElementById("cost").innerHTML=cost;
    }
    function lokesh(obj) {

        var val = obj.value;
        var name = obj.name;
        order.push([val,name]);
        alert(order);
    }
 var width = $(window).width();
        var height = $(window).height();
        function back() {
            document.getElementById("showm").style.display = "none";
            $("#rname").empty();
            $("#price").empty();
        }
        function shiva() {
            var dh = document.getElementById("main").offsetHeight;
            var fh = document.getElementById("form").offsetHeight;
            var ch = document.getElementById("con").offsetHeight;
            var rdh = (height / 2) - (dh / 2);
            document.getElementById("main").style.top = (rdh) + "px";

        }