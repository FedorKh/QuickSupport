
    app.config(function ($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "templates/home.html"
            })
            .when("/tm_1", {
                templateUrl: "templates/TM/tm_1.html"
            })
            .when("/tm_2", {
                templateUrl: "templates/TM/tm_2.html"
            })
            .when("/tm_3", {
                templateUrl: "templates/TM/tm_3.html"
            })
               .when("/tm_4", {
                templateUrl: "templates/TM/tm_4.html"
            })
            .when("/tm_5", {
                templateUrl: "templates/TM/tm_5.html"
            })
            .when("/tm_6", {
                templateUrl: "templates/TM/tm_6.html"
            })
            .when("/tm_7", {
                templateUrl: "templates/TM/tm_7.html"
            })
            .when("/tm_8", {
                templateUrl: "templates/TM/tm_8.html"
            })
            .when("/cubes_3_1", {
                templateUrl: "templates/Cubes/cubes_3_1.html"
            })
            .when("/cubes_3_2", {
                templateUrl: "templates/Cubes/cubes_3_2.html"
            })
            .when("/cubes_3_3", {
                templateUrl: "templates/Cubes/cubes_3_3.html"
            })

            .when("/sw_13_1", {
                templateUrl: "templates/SalesWorks/sw_13_1.html"
            })
            .when("/sw_13_3", {
                templateUrl: "templates/SalesWorks/sw_13_3.html"
            })
            .when("/sw_14_1", {
                templateUrl: "templates/SalesWorks/sw_14_1.html"
            })
            .when("/sw_14_4", {
                templateUrl: "templates/SalesWorks/sw_14_4.html"
            })
            .when("/sw_14_5", {
                templateUrl: "templates/SalesWorks/sw_14_5.html"
            })
             .when("/sw_14_7", {
                templateUrl: "templates/SalesWorks/sw_14_7.html"
            })



            .when("/skip_6_1", {
                templateUrl: "templates/SKIP/skip_6_1.html"
            })
            .when("/skip_6_3", {
                templateUrl: "templates/SKIP/skip_6_3.html"
            })
            .when("/skip_6_7", {
                templateUrl: "templates/SKIP/skip_6_7.html"
            })
            .when("/skip_7_1", {
                templateUrl: "templates/SKIP/skip_7_1.html"
            })


            .when("/reports_1_1", {
                templateUrl: "templates/Reports/reports_1_1.html"
            })
            .when("/reports_6_1", {
                templateUrl: "templates/Reports/reports_6_1.html"
            })
            .when("/reports_6_2", {
                templateUrl: "templates/Reports/reports_6_2.html"
            })
            .when("/reports_6_3", {
                templateUrl: "templates/Reports/reports_6_3.html"
            })
            .when("/reports_12_1", {
                templateUrl: "templates/Reports/reports_12_1.html"
            })
            .when("/reports_12_2", {
                templateUrl: "templates/Reports/reports_12_2.html"
            })
            .when("/reports_12_3", {
                templateUrl: "templates/Reports/reports_12_3.html"
            })
            .when("/reports_13_1", {
                templateUrl: "templates/Reports/reports_13_1.html"
            })
            .when("/reports_13_2", {
                templateUrl: "templates/Reports/reports_13_2.html"
            })
            .when("/reports_13_3", {
                templateUrl: "templates/Reports/reports_13_3.html"
            })
            .when("/reports_14_1", {
                templateUrl: "templates/Reports/reports_14_1.html"
            })
            .when("/reports_14_2", {
                templateUrl: "templates/Reports/reports_14_2.html"
            })
            .when("/reports_14_3", {
                templateUrl: "templates/Reports/reports_14_3.html"
            })
            .when("/reports_14_4", {
                templateUrl: "templates/Reports/reports_14_4.html"
            })
            .when("/cpr_6_1", {
                templateUrl: "templates/CPR/cpr_6_1.html"
            })

            //.otherwise({redirectTo: "/"});
    });
