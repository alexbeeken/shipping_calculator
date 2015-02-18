
$(document).ready(function () {
  $("form#shippingForm").submit(function(event) {
    var length1 = parseFloat($("input#length").val());
    var width1 = parseFloat($("input#width").val());
    var height1 = parseFloat($("input#height").val());
    var weight1 = parseFloat($("input#weight").val());
    var distance1 = parseFloat($("input#distance").val());

    var parcel = {
      length: length1,
      width: width1,
      height: height1,
      weight: weight1,
      distance: distance1,
      cost: function() {
        var volume = (this.length * this.width * this.height);
        var vcost;
        var wcost;
        var dcost = this.distance * .01;
        if (volume <= 200){
          vcost = 7.50;
        } else {
          vcost = (volume * .0375)
        }
        if (this.weight > 70) {
          wcost = this.weight * 2;
        } else {
          wcost = this.weight / 2;
        }
        if (this.distance > 4000) {
          dcost = dcost + 50;
        }
        return (vcost + dcost + wcost).toFixed(2);
      }
    };

    $("#priceDiv").show();
    $("#priceSpan").text(parcel.cost());

    event.preventDefault();
  });
});
