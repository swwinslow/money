app.factory('BudgetFactory', function($http, $rootScope) {
    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/budget';

    var currentYear = new Date().getFullYear();

    data.getSavings = function(){
        return $http.get(baseUrl + "/saving");
    }

    data.currentPayBreakdown = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/currentPayBreakdown',
            data: {}
        });    
    }

    data.fullYearReview2019 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReview',
            data: {
                "year": '2019'
            }
        });    
    }

    data.fullYearReview2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReview',
            data: {
                "year": '2020'
            }
        });    
    }

    data.fullYearReviewLeft2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReviewLeft',
            data: {
                "year": '2020'
            }
        });    
    }
    
    data.fullYearReview2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReview',
            data: {
                "year": '2021'
            }
        });    
    }
    data.fullYearReview2022 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReview',
            data: {
                "year": '2022'
            }
        });    
    }

    data.fullYearReview2023 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReview',
            data: {
                "year": '2023'
            }
        });    
    }

    data.fullYearReview = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReview',
            data: {
                "year": currentYear
            }
        });    
    }

    data.fullYearReviewYear = function(){
        var currentTime = new Date()

        var currentYear = new Date().getFullYear();
        var nextYear = currentYear + 1;

        var day = currentTime.get();

        console.log('here is the night')
        console.log(day);
        // return $http({
        //     method: "POST",
        //     url: baseUrl + '/fullYearReview',
        //     data: {
        //         "year": nextYear
        //     }
        // });    
    }

    data.salaryReview2018 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/salaryReview',
            data: {
                "year": '2018'
            }
        });    
    }

    data.predictValuesItems = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/predictValuesItems',
            data: {
                "year": '2020'
            }
        });    
    }

    data.predictValuesItems2020 = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/predictValuesItems',
            data: {
                "year": '2020'
            }
        });    
    }
    
    data.predictValuesItems2021 = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/predictValuesItems',
            data: {
                "year": '2021'
            }
        });    
    }
    data.predictValuesItemsCurrentYear = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/predictValuesItemsCurrentYear',
            data: {
                "year": '202'
            }
        });    
    }

    data.resturantsData = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/resturantsData',
            data: {
                "year": '2020'
            }
        });    
    }

    data.amazonSpent = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/amazonSpent',
        });    
    }

    data.KrogerSpent = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/KrogerSpent',
        });    
    }

    data.CitizenEnergySpent = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/CitizenEnergySpent',
        });    
    }

    data.IPLSpent = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/IPLSpent',
        });    
    }

    data.RingSpent = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/RingSpent',
        });    
    }

    data.UtilsOnYear = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/UtilsOnYear',
        });    
    }
    data.ATTSpent = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/ATTSpent',
        });    
    }
    data.medicalSpent = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/medicalSpent',
        });    
    }

    data.totalCreditCards = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/totalCreditCards',
        });    
    }

    data.nextPayDay = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/nextPayDay',
        });    
    }

    data.insightData = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/insightData',
            data: {
                "year": '2018'
            }
        });    
    }

    //SALARY REVIEW
    data.salaryReview2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/salaryReview',
            data: {
                "year": '2020'
            }
        });    
    }
    data.salaryReview2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/salaryReview',
            data: {
                "year": '2021'
            }
        });    
    }

    data.salaryReview2022 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/salaryReview',
            data: {
                "year": '2022'
            }
        });    
    }

    data.salaryReview = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/salaryReview',
            data: {
                "year": currentYear
            }
        });    
    }

    data.yearCategoryReview2018 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearCategoryReview',
            data: {
                "year": '2018'
            }
        });    
    }


    data.yearCategoryReview2019 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearCategoryReview',
            data: {
                "year": '2019'
            }
        });    
    }

    data.yearCategoryReview2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearCategoryReview',
            data: {
                "year": '2020'
            }
        });    
    }

    data.predictValues2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/predictValues',
            data: {
                "year": '2020'
            }
        });    
    }

    data.yearCategoryReview2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearCategoryReview',
            data: {
                "year": '2021'
            }
        });    
    }
    data.yearCategoryReview2022 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearCategoryReview',
            data: {
                "year": '2022'
            }
        });    
    }

    data.yearCategoryReview = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearCategoryReview',
            data: {
                "year": currentYear
            }
        });    
    }

    //PAY V SPENT PER YEAR
    data.payVSpent2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/payVSpent',
            data: {
                "year": '2020'
            }
        });    
    }
    data.payVSpent2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/payVSpent',
            data: {
                "year": '2021'
            }
        });    
    }
    data.payVSpent2022 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/payVSpent',
            data: {
                "year": '2022'
            }
        });    
    }

    //BLDDD - PER YEAR
    data.BLDDDPerYear2018 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/BLDDDPerYear',
            data: {
                "year": '2018'
            }
        });    
    }
    data.BLDDDPerYear2019 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/BLDDDPerYear',
            data: {
                "year": '2019'
            }
        });    
    }
    data.BLDDDPerYear2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/BLDDDPerYear',
            data: {
                "year": '2020'
            }
        });    
    }
    data.BLDDDPerYear2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/BLDDDPerYear',
            data: {
                "year": '2021'
            }
        });    
    }
    data.BLDDDPerYear2022 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/BLDDDPerYear',
            data: {
                "year": '2022'
            }
        });    
    }
    data.BLDDDPerYear2023 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/BLDDDPerYear',
            data: {
                "year": '2023'
            }
        });    
    }

    //YearBLDDDTotal
    data.YearBLDDDTotal = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/YearBLDDDTotal',
        });   
    }

    //computeBLDDDTotal
    data.computeBLDDDTotal = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/computeBLDDDTotal',
        });   
    }
    
    //
    data.BMVYear = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/BMVYear',
        });   
    }

    //
    data.NetworthPerQuarter = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/NetworthPerQuarter',
        });   
    }

    data.networthYearPercentage = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/networthYearPercentage',
        });   
    }

    data.HouseUtils = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/HouseUtils',
            data: {}
        });    
    }

    data.CarPaymentLeft = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/CarPaymentLeft',
            data: {}
        });    
    }
    
    data.IRAPerYear = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/IRAPerYear',
            data: {}
        });    
    }

    data.networthYearCalculation = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/networthYearCalculation',
            data: { }
        });    
    }

    data.lillyPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/lillyPay',
            data: { }
        });    
    }

    data.totalPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/totalPay',
            data: { }
        });    
    }

    data.veevaPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/veevaPay',
            data: { }
        });    
    }
    
    data.UKGPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/UKGPay',
            data: { }
        });    
    }

    data.elementsPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/elementsPay',
            data: { }
        });    
    }

    data.chaseCreditCardPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/chaseCreditCardPay',
            data: { }
        });    
    }
    
    data.networthYearCalculationCategory = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/networthYearCalculationCategory',
            data: { }
        });    
    }

    data.paymentTypesTrans = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/paymentTypesTrans',
            data: { }
        });    
    }

    
    data.BLDDDMonths = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/BLDDDMonths',
            data: { }
        });    
    }

    data.SethPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/SethPay',
            data: { }
        });    
    }

    data.EmilyPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/EmilyPay',
            data: { }
        });    
    }

    data.houseExtraPrin = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/houseExtraPrin',
            data: { }
        });    
    }

    data.housePayments = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/housePayments',
            data: { }
        });    
    }
    
    data.specialEvents = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/specialEvents',
            data: { }
        });    
    }

    data.lifeEvents = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/lifeEvents',
            data: { }
        });    
    }

    data.gerneralData = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/gerneralData',
            data: {
                "year": '2020'
            }
        });    
    }

    ////// MISC PER YEAR /////
    data.miscItems2019 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/miscItems',
            data: {
                "year": '2019'
            }
        });    
    }
    data.miscItems2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/miscItems',
            data: {
                "year": '2020'
            }
        });    
    }
    data.miscItems2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/miscItems',
            data: {
                "year": '2021'
            }
        });    
    }
    data.miscItems2022 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/miscItems',
            data: {
                "year": '2022'
            }
        });    
    }

    data.yearReview2018 = function(){
        return $http.get(baseUrl + "/yearReview/2018");
    }
    data.yearReview2019 = function(){
        return $http.get(baseUrl + "/yearReview/2019");
    }
    data.yearReview2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearReview',
            data: {
                "year": '2020'
            }
        });
    }

    data.yearReview2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearReview',
            data: {
                "year": '2021'
            }
        });
    }

    data.YearBLDDDSeth = function() {
        return $http({
            method: "POST",
            url: baseUrl + '/YearBLDDDSeth',
            data: {}
        });
    }
    
    data.YearBLDDDEmily = function() {
        return $http({
            method: "POST",
            url: baseUrl + '/YearBLDDDEmily',
            data: {}
        });
    }

    data.YearBLDDDBoth = function() {
        return $http({
            method: "POST",
            url: baseUrl + '/YearBLDDDBoth',
            data: {}
        });
    }

    return data;
});
