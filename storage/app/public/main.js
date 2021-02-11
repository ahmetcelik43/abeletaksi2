
    
    
    var main = angular.module('main', [], function() {
        //$interpolateProvider.startSymbol('<%');
        //$interpolateProvider.endSymbol('%>');
    })
    main.constant('baseUrl','http://localhost:8000');
    /*
   main.service("validationForm",function()
    {
        var validationModel={};
        validationModel.validation=function(data)
        {
          
        }
    })
    */
  main.filter('dateTimeFormat',function () {
    return function(value){
        return new Date(value).toLocaleDateString('tr-TR');
    } 
  })
    
 
    main.filter('fltr',function()
    {
      return function(value , saat , gun){
          if(value.length>0 || angular.isDefined(value))
          {
              var mapped=[];
              value.forEach(function(i){
                  if(i.saatler== saat && i.gunler == gun) mapped.push({saat:i.saatler,gun:i.gunler});
              });
              if(mapped.length==0) return {checked:false , status:false} ; else return {checked:true , status:true};
          }
      }
    });
main.service('authFactory', function authFactory($http,$location , Data) {
        var userModel={};
        //let cache=$cacheFactory("sehirveilce");

       
         return userModel;  
       
    });
    
    main.factory('Data', function Data($http) {
        return{
            get: function get(url) {

                 return $http.get(url);
                 },
        
        
            post: function post(url,data) {

                 return $http({
                    header: {
                        "content-type":"application/json",
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                
                    },
                    url: url,
                    method: "POST",
                    data: data                
                });
                 },
                         }
    });
    
    main.run(function ($rootScope,authFactory,$http,$location,$timeout) {

       // $animate.enabled(true);
      

      /*  $transitions.onBefore({}, function(transition) {
            
        const cookie = authFactory.getUser() ? authFactory.getUser() : false ;
            
        //const kuafor = ["kuaforFormDoldur"].indexOf(transition.to().name) === -1; //yoksa
 
   //var protected =angular.isDefined(transition.to().protected) ? transition.to().protected :false;
   if(!authFactory.getAuthStatus() &&  transition.to().protected)
     return transition.router.stateService.target('home');
 
  
    });
    */
   /*
    $transitions.onStart({}, function(transition) {
        //$(".container-all").css('display','none');
        document.getElementsByClassName('loading')[0].style.display='block';
      console.log(12)
       // $(".loading").css('display','block');
    });
    
    $transitions.onSuccess({}, function(transitions) {
        $timeout(function(){
            document.getElementsByClassName('container-all')[0].style.display='block';
            document.getElementsByClassName('loading')[0].style.display='none';
    
    },3000)
    });*/
   
});
   
    main.config(function ($controllerProvider,$locationProvider,$httpProvider
        ) {

            main.registerCtrl = $controllerProvider.register;

        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks:true        
        });*/
       /*
       var master = {
        name: 'master',
        abstract: true,
        controller: 'main',
    };  
       var home = {
        name: 'home',
        parent: master,
        url: '/',
        templateUrl: 'Templates/home.html', 
        controller: 'home'
    };
    /*admin page*/
    /*
    var masterAdmin = {
        name: 'masterAdmin',
        abstract: true,
        controller: 'masterAdmin',
    };  
    var homeAdmin = {
        name: 'homeAdmin',
        parent: masterAdmin,
        url: '/admin',
        templateUrl: 'Templates/admin/home.html', 
        controller: 'homeAdmin',
    };  
    var yazıEkle = {
        name: 'yazıEkle',
        parent: masterAdmin,
        url: '/yazı-ekle',
        templateUrl: 'Templates/admin/yazıekle.html', 
        controller: 'yazıEkle',
    };  
    var giris = {
        name: 'giris',
        url: '/giris',
        templateUrl: 'Templates/auth/giris.html', 
        controller: 'giris',
    };  
        /*
        var kuaforFormDoldur = {
            name: 'kuaforFormDoldur',
            parent: master,
            url: '/ilan-yayınla/:isnewuser?/:role?',
            templateUrl: '/newTemplate/kuaforFormDoldur.html',
            controller:'formDoldur',
            protected:true,
            data: "Kuafor",
            params: {
                isnewuser: {
                    value: null,
                    squash: true
                },
                role: {
                    value: null,
                    squash: true
                },
              },  
        };
      */
     // $stateProvider.state(master).state(home).state(masterAdmin).state(homeAdmin).state(yazıEkle).state(giris);

    //cfpLoadingBarProvider.includeSpinner = false;
    //cfpLoadingBarProvider.includeBar = true;

    //cfpLoadingBarProvider.parentSelector = '#loading-bar';

      
        
        $httpProvider.defaults.useXDomain = true;
       

        

       
    });
    main.controller('main' ,function(Data,$scope,$timeout,$rootScope)
    {
    
        //cfpLoadingBar.start();
    /*
        $rootScope.$on('stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
alert()
           if (toState.resolve) {
            //document.getElementsByClassName('container-all')[0].style.display='none';
            //$(".container-all").css('display','none');
            document.getElementsByClassName('loading')[0].style.display='block';
            alert()

           }
       });
       $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        if (toState.resolve) {
            $timeout(function(){
                document.getElementsByClassName('container-all')[0].style.display='block';
        //$(".container-all").css('display','none');
        document.getElementsByClassName('loading')[0].style.display='none';
                     },3000)
                }
    });*/
    
   /* $scope.$on("$destroy",function() {    
       $( window ).off( "resize.Viewport" );
    });
    */
    //logo renk : #8c52
    
 
    $(document).on('click', function (event) {
        if (!$(event.target).closest('#mySidenav').length && $('#mySidenav').css('width')=="300px") {
            $('#mySidenav').css('width','0px');   
            $('#overlay').fadeOut('fast');
            //$('#logo2').fadeOut();
      
        }
      
      })
        $scope.sidebarOpen=function()
            {
              
                $('#mySidenav').css({'width':'300px','z-index':'99999'});
                
                //$('#mySidenav').css('opacity','1 !important');
               // $('body > :not(#mySidenav)').css('box-shadow','0 0 0 99999px rgba(0, 0, 0, .8)');
               $('#overlay').fadeIn('fast');
               //$('#logo2').fadeIn();
               //$('#mySidenav').css('z-index','99999');
               
            }
    
    
    });
    
    
