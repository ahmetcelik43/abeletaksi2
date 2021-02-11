<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ahmet Çelik</title>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <link rel="stylesheet" href="{{ URL::asset('storage/bootstrap.min.css') }}" />
    <link rel="stylesheet" href="{{ URL::asset('storage/all.css') }}" />
   

    <script src="https://kit.fontawesome.com/d1fc3fdb09.js" crossorigin="anonymous"></script>

   <script src="{{ URL::asset('node_modules/bootstrap.native/dist/bootstrap-native.min.js')}}"></script>

   <script src="{{ URL::asset('storage/angular.min.js') }}"></script>
   <script src="{{ URL::asset('storage/jquery.min.js') }}"></script>

   <script src="{{ URL::asset('storage/main.js') }}"></script>
   @yield('head')

</head>
<body ng-app="main" ng-controller="main">
 <!-- <div class="loading">
    <div class="logo-container">
           <img src="/images/logo.jpeg" class="logo" alt="">

  </div>
        <img class="page-loader" src="/images/loading.svg" alt="">
  </div>
-->
  <div class="container-all " >
    
    <div id="loading-bar"></div>
    <div id="overlay"></div>
    <div id="mySidenav" class="sidenav">
      
        <div class="sidenavMenu">
    
          <a href="javascript:void(0)" class="closebtn" ng-click="sidebarClose()">&times;</a>
        </div>
        <a href="/">Ana Sayfa </a>
      <a href="/kampanya">Kampanyalar</a>
      <a>İletişim</a>
    </div>
    <div id="navbar-top-custom">
      <img class="page-loader" src="storage/img/logo.jpeg" alt="">
     <div class="navbar-top">
     
      <ul class="navbar-right-custom">
        <li id="bars"> <button type="button" class="btn btn-outline-primary" ng-click="sidebarOpen()"><i class="fas fa-bars"></i>
        </button>
        </li>
      <li><a href="{{ route('layout')}}">Ana Sayfa</a> </li>
       <li><a href="{{ route('kampanya')}}">Kampanyalar</a></li>
       <li>İletişim</li>
      </ul>
    </div>
  </div>
   <div>
     <div class="container" style="min-height: 600px;margin-top:20px">
    @yield('content')
  </div>
   </div>
   <div class="footer container-fluid ">
    <div class="row social">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-linkedin-in"></i>
    </div>
    <div class="row footer-bottom">
      <div class="col-md-6 col-xs-12">
        <img class="page-loader" src="storage/img/logo.jpeg" alt="">

      </div>
    </div>
    <div class="row footer-middle">
      <div class="col-md-7 col-xs-12" style="margin-left:auto;margin-right:auto;">
        <ul>
              
          <li><a>Anasayfa</a></li>
          <li><a>Kampanyalar</a></li>
          <li><a>İetişim</a></li>
        </ul>
      </div>
      </div>
      <div class="row footer-bottom2">
         <strong style="color:white;">&copy - 2021</strong>
      </div>
    </div>
    
    </div>
  </div>
 
   <script>
     /*
    $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    if ($(window).scrollTop() > 90) {
      $('#navbar-top').addClass('sticky');
    }
    if ($(window).scrollTop() < 91) {
      $('#navbar-top').removeClass('sticky');
    }
  });
  */
  
document.addEventListener("scroll", onscroll);
   function onscroll()
   {
    if (document.scrollingElement.scrollTop > 90) {
      document.getElementById("navbar-top-custom").classList.add("sticky");
    }
    if (document.scrollingElement.scrollTop < 91) {
      document.getElementById("navbar-top-custom").classList.remove("sticky");

    }
   }
    </script>

</body>
</html>
