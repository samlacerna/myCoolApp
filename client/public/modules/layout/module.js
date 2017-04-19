/* global angular */
'use strict'

angular.module('public.layout', ['ui.router'])

.config(function($stateProvider){
    $stateProvider
    .state('public',{
        abstract: true,
        views: {
            root: {
                templateUrl: '/client/layout/layout.tpl.html',
                // controller: 'LoginPubController as LoginPubCtrl'
            }
        }
    })
    // .state('public.404', {
    //     url: '/404',
    //     views: {
    //         'content@public':{
    //             templateUrl: 'client/layout/views/404.html'
    //         }
    //     }
    // })

    // $urlRouterProvider.otherwise('/404')
    // $locationProvider.html5Mode(true)
})