angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'toastr', 'ui.swiper', 'highcharts-ng'])
    .controller('headerctrl', function ($scope, TemplateService, $state) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });

        if ($.jStorage.get('state')) {
            $scope.profile = $.jStorage.get('state');
            console.log(" $scope.profile---", $scope.profile)
        }
    })

    .controller('LoginCtrl', function ($scope, TemplateService, $state, NavigationService, $timeout, toastr) {
        $scope.template = TemplateService.changecontent("login"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Login"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.variables = {};
        $scope.variables.letIn = true;
        $scope.doLogin = function (formData) {
            console.log("m in doLogin", formData)
            if ($scope.variables.letIn) {
                $scope.variables.letIn = false;
                NavigationService.login(formData, function (data) {
                    console.log("data found is", data.data)
                    $scope.variables.letIn = true;
                    if (data.data.value === true) {
                        $.jStorage.set('state', data.data.data);
                        toastr.success('You have been successfully logged in');
                        $state.go('home');
                    } else if (data.data.value === false) {
                        toastr.warning(data.data.message, 'Login Failure');
                    } else {
                        toastr.warning('Something went wrong', 'Please try again');
                    }
                });
            }
        };
    })

    .controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Overview"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.reforms = ['SHEC', 'SHEP', 'Governance & Administrative', 'Financial contri - bution to Higher Education as a % of GSDP', 'Accreditation & Quality', 'Affiliation reforms', 'Examination Reforms'];
        $scope.reforms.selected = 'SHEC';

        $scope.states = [{
                "name": "Andaman and Nicobar Islands",
                "score": 19
            },
            {
                "name": "Andhra Pradesh",
                "score": 23
            },
            {
                "name": "Arunachal Pradesh",
                "score": 21
            },
            {
                "name": "Assam",
                "score": 11
            },
            {
                "name": "Bihar",
                "score": 20
            },
            {
                "name": "Chandigarh",
                "score": 24
            },
            {
                "name": "Chhattisgarh",
                "score": 22
            },
            {
                "name": "Dadra and Nagar Haveli",
                "score": 15
            },
            {
                "name": "Daman and Diu",
                "score": 13
            },
            {
                "name": "Delhi",
                "score": 7
            },
            {
                "name": "Goa",
                "score": 24
            },
            {
                "name": "Gujarat",
                "score": 22
            },
            {
                "name": "Haryana",
                "score": 16
            },
            {
                "name": "Himachal Pradesh",
                "score": 22
            },
            {
                "name": "Jammu and Kashmir",
                "score": 21
            },
            {
                "name": "Jharkhand",
                "score": 21
            },
            {
                "name": "Karnataka",
                "score": 28
            },
            {
                "name": "Kerala",
                "score": 23
            },
            {
                "name": "Lakshadweep",
                "score": 0
            },
            {
                "name": "Madhya Pradesh",
                "score": 16
            },
            {
                "name": "Maharashtra",
                "score": 20
            },
            {
                "name": "Manipur",
                "score": 17
            },
            {
                "name": "Meghalaya",
                "score": 18
            },
            {
                "name": "Mizoram",
                "score": 25
            },
            {
                "name": "Nagaland",
                "score": 19
            },
            {
                "name": "Odisha",
                "score": 23
            },
            {
                "name": "Puducherry",
                "score": 21
            },
            {
                "name": "Punjab",
                "score": 14
            },
            {
                "name": "Rajasthan",
                "score": 23
            },
            {
                "name": "Sikkim",
                "score": 18
            },
            {
                "name": "Tamil Nadu",
                "score": 22
            },
            {
                "name": "Telangana",
                "score": 19
            },
            {
                "name": "Tripura",
                "score": 15
            },
            {
                "name": "Uttar Pradesh",
                "score": 21
            },
            {
                "name": "Uttarakhand",
                "score": 18
            },
            {
                "name": "West Bengal",
                "score": 27
            },
        ];

        $scope.chartConfig2 = {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    '13-14',
                    '16-17',
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Karnataka',
                data: [4, 5]

            }, {
                name: 'West Bengal',
                data: [3, 5]

            }, {
                name: 'Mizoram',
                data: [0, 3]

            }, {
                name: 'Chandigarh',
                data: [1, 4]

            }, {
                name: 'Goa',
                data: [0, 4]

            }],
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            }
        };

        // $scope.mapConfig = {
        //     title: {
        //         text: 'Map View'
        //     },
        //     mapNavigation: {
        //         enabled: true,
        //         buttonOptions: {
        //             verticalAlign: 'bottom'
        //         }
        //     },
        //     colorAxis: {
        //         min: 0
        //     },
        //     series: [{
        //         data: data,
        //         mapData: Highcharts.maps['countries/in/custom/in-all-disputed'],
        //         joinBy: 'hc-key',
        //         name: 'Random data',
        //         states: {
        //             hover: {
        //                 color: '#a4edba'
        //             }
        //         },
        //         dataLabels: {
        //             enabled: true,
        //             format: '{point.name}'
        //         }
        //     }],
        //     credits: {
        //         enabled: false
        //     },
        // };

        $scope.graphConfig = {
            chart: {
                type: 'areaspline'
            },
            series: [{
                name: 'Karnataka',
                data: [12, 28]

            }, {
                name: 'West Bengal',
                data: [3, 5]

            }, {
                name: 'Mizoram',
                data: [0, 3]

            }, {
                name: 'Chandigarh',
                data: [1, 4]

            }, {
                name: 'Goa',
                data: [0, 4]

            }],
            xAxis: {
                categories: [
                    '13-14',
                    '16-17',
                ],
                crosshair: true
            },
            title: {
                text: 'Total Score'
            },
            credits: {
                enabled: false
            },
            loading: false,
            exporting: {
                enabled: false
            },
        };

        $scope.sparkLineConfig = {
            chart: {
                backgroundColor: null,
                borderWidth: 0,
                type: 'area',
                margin: [2, 0, 2, 0],
                width: 120,
                height: 20,
                style: {
                    overflow: 'visible'
                },
                skipClone: true
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickPositions: []
            },
            yAxis: {
                endOnTick: false,
                startOnTick: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tickPositions: [0]
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: false,
                    lineWidth: 1,
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    marker: {
                        radius: 1,
                        states: {
                            hover: {
                                radius: 2
                            }
                        }
                    },
                    fillOpacity: 0.25
                },
                column: {
                    negativeColor: '#910000',
                    borderColor: 'silver'
                }
            },
            exporting: {
                enabled: false
            },
            series: [{
                data: [{
                    y: 1,
                    name: '14-15'
                }, {
                    y: 2,
                    name: '16-17'
                }]
            }]
        };

    })

    .controller('StateInfoCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("state-info"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("State"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.reforms = ['SHEC', 'SHEP', 'Governance & Administrative', 'Financial contri - bution to Higher Education as a % of GSDP', 'Accreditation & Quality', 'Affiliation reforms', 'Examination Reforms'];
        $scope.reforms.selected = 'SHEC';


        $scope.sparkLineConfig = {
            chart: {
                backgroundColor: null,
                borderWidth: 0,
                type: 'area',
                margin: [2, 0, 2, 0],
                width: 120,
                height: 20,
                style: {
                    overflow: 'visible'
                },
                skipClone: true
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickPositions: []
            },
            yAxis: {
                endOnTick: false,
                startOnTick: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tickPositions: [0]
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: false,
                    lineWidth: 1,
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    marker: {
                        radius: 1,
                        states: {
                            hover: {
                                radius: 2
                            }
                        }
                    },
                    fillOpacity: 0.25
                },
                column: {
                    negativeColor: '#910000',
                    borderColor: 'silver'
                }
            },
            exporting: {
                enabled: false
            },
            series: [{
                data: [{
                        y: 1,
                        name: '14-15'
                    },
                    {
                        y: 2,
                        name: '16-17'
                    }
                ]
            }]
        };

        $scope.reforms1 = [{
                name: 'SHEC',
                y: 1,
            },
            {
                name: 'SHEP',
                y: 0,
            }, {
                name: 'Governance & administrative reforms',
                y: 3,
            }, {
                name: 'Financial contri - bution to Higher Education as a % of GSDP',
                y: 3,
            }, {
                name: 'Accreditation & Quality',
                y: 1,
            }, {
                name: 'Affiliation reforms',
                y: 3,
            }, {
                name: 'Examination Reforms',
                y: 3,
            }
        ];

        $scope.reforms2 = [{
                name: 'SHEC',
                y: 0,
            },
            {
                name: 'SHEP',
                y: 0,
            }, {
                name: 'Governance & administrative reforms',
                y: 0,
            }, {
                name: 'Financial contri - bution to Higher Education as a % of GSDP',
                y: 0,
            }, {
                name: 'Accreditation & Quality',
                y: 0,
            }, {
                name: 'Affiliation reforms',
                y: 0,
            }, {
                name: 'Examination Reforms',
                y: 0,
            }
        ];

        $scope.reforms3 = [{
                name: 'SHEC',
                y: 5,
            },
            {
                name: 'SHEP',
                y: 4,
            }, {
                name: 'Governance & administrative reforms',
                y: 4,
            }, {
                name: 'Financial contri - bution to Higher Education as a % of GSDP',
                y: 4,
            }, {
                name: 'Accreditation & Quality',
                y: 4,
            }, {
                name: 'Affiliation reforms',
                y: 4,
            }, {
                name: 'Examination Reforms',
                y: 3,
            },
        ];

        $scope.sumReceived = function () {
            return _.sumBy($scope.reforms3, 'y');
        };
        $scope.sumOutOf = function () {
            return 35;
        };


        $scope.graphConfig = {
            chart: {
                type: 'areaspline'
            },
            xAxis: {
                categories: []
            },
            series: [{
                name: '16-17',
                data: $scope.reforms3
            }, {
                name: '13-14',
                data: $scope.reforms1
            }, ],
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            loading: false,
            exporting: {
                enabled: false
            },
        };

        $scope.meterConfig = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },

            title: {
                text: ''
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#FFF'],
                            [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#333'],
                            [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }],
                exporting: {
                    enabled: false
                },
            },

            // the value axis
            yAxis: {
                min: 0,
                max: $scope.sumOutOf(),

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: ''
                },
                plotBands: [{
                    from: 0,
                    to: 10,
                    color: '#DF5353' // red
                }, {
                    from: 10,
                    to: 20,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 20,
                    to: 35,
                    color: '#55BF3B' // green
                }]
            },

            series: [{
                name: 'Total Score',
                data: [$scope.sumReceived()],
                tooltip: {
                    valueSuffix: ''
                }
            }],
            credits: {
                enabled: false
            },
        };
    })

    .controller('ReformListCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("reform-list"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Reform List"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

    .controller('ReformNewCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("reform-new"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Reform New"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })


    .controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

        $scope.changeLanguage = function () {
            console.log("Language Clicked");

            if (!$.jStorage.get("language")) {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                if ($.jStorage.get("language") == "en") {
                    $translate.use("hi");
                    $.jStorage.set("language", "hi");
                } else {
                    $translate.use("en");
                    $.jStorage.set("language", "en");
                }
            }
            //  $rootScope.$apply();
        };


    })

;