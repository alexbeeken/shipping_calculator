
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
        var area = (this.length * this.width * this.height);
        if (area <= 200){
          return 7.50
        } else {
          return (area * .0375)
        }

      }
    };


    $("#priceSpan").text(parcel.cost());

    event.preventDefault();
  });
});
