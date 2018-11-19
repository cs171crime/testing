// DATA-SETS
// Global variable with 1198 pizza deliveries
console.log(deliveryData);

// Global variable with 200 customer feedbacks
console.log(feedbackData);


createVisualization();

function createVisualization() {
    dataSummary(deliveryData);
    renderBarChart(deliveryData);
}

// Function to summarize Data

function dataSummary(data) {
    // // Function to summarize Data - FILTER DATA, THEN DISPLAY SUMMARY OF DATA & BAR CHART
    function calculateNumPizzas() {

        var pizzaSum = 0;

        for (var i = 0; i < deliveryData.length; i++) {
            pizzaSum += deliveryData[i].count
        }

        return pizzaSum;
    }
    function averageDeliveryTime() {

        var delivSum = 0;

        for (var i = 0; i < deliveryData.length; i++) {
            delivSum += deliveryData[i].delivery_time
        }

        var avgDelTime = delivSum / deliveryData.length;
        return avgDelTime;
    }

// Assuming price = total price

    function calculateTotalSales() {

        var saleSum = 0;

        for (var i = 0; i < deliveryData.length; i++) {
            saleSum += deliveryData[i].price
        }

        return saleSum;

    }

    function calculateQualityTypes() {
        var numLow = 0;
        var numMed = 0;
        var numHigh = 0;

        for (var i = 0; i < feedbackData.length; i++) {
            if (feedbackData[i].quality == "low") {
                numLow++;
            } else if (feedbackData[i].quality == "medium" ) {
                numMed++;
            } else {
                numHigh++;
            }
        }

        return [numLow, numMed, numHigh];
    }

    //Dynamically edit HTML with JS
    document.getElementById("numPizzaDels").innerHTML = "Total Deliveries: " + deliveryData.length;
    document.getElementById("numPizzas").innerHTML = "Pizzas delivered: " + calculateNumPizzas();
    document.getElementById("avgDelTime").innerHTML = "Average Delivery Time: " + averageDeliveryTime().toFixed(2);
    document.getElementById("totalSales").innerHTML = "Total Sales: $" + calculateTotalSales();
    document.getElementById("numFeedEntries").innerHTML = "Customers providing feedback: " + feedbackData.length;
    document.getElementById("numLowQual").innerHTML = "Low Quality Pizzas: " + calculateQualityTypes()[0];
    document.getElementById("numMedQual").innerHTML = "Medium Quality Pizzas: " + calculateQualityTypes()[1];
    document.getElementById("numHighQual").innerHTML = "High Quality Pizzas: " + calculateQualityTypes()[2];
}

function dataFilter() {
    var selectBox_Area = document.getElementById("select-Area");
    var selectedValue_Area = selectBox_Area.options[selectBox_Area.selectedIndex].value;

    var selectBox_orderType = document.getElementById("select-orderType");
    var selectedValue_orderType = selectBox_orderType.options[selectBox_orderType.selectedIndex].value;
    console.log(selectedValue_orderType);

    var exper = deliveryData;

    if (selectedValue_Area === "all" && selectedValue_orderType === "all") {
        dataSummary(deliveryData);
        renderBarChart(deliveryData);
    }

    else if (selectedValue_Area !== "all" && selectedValue_orderType === "all") {
        exper = deliveryData.filter(function (value) {
            return (value.area === selectedValue_Area);
        });
        console.log(exper);
        dataSummary(exper);
        renderBarChart(exper);
    }

    else if (selectedValue_Area === "all" && selectedValue_orderType !== "all") {
        exper = deliveryData.filter(function (value) {
            return (value.order_type === selectedValue_orderType);
        })

        console.log(exper);
        dataSummary(exper);
        renderBarChart(exper);
    }

    else {
        exper = deliveryData.filter(function (value) {
            return (value.area === selectedValue_Area);
        })
        exper = exper.filter(function (value) {
            return (value.order_type === selectedValue_orderType);
        })

        console.log(exper);
        dataSummary(exper);
        renderBarChart(exper);
    }

}
/* ************************************************************
 *
 * ADD YOUR CODE HERE
 * (accordingly to the instructions in the HW2 assignment)
 *
 * 1) Filter data
 * 2) Display key figures
 * 3) Display bar chart
 * 4) React to user input and start with (1)
 *
 * ************************************************************/



