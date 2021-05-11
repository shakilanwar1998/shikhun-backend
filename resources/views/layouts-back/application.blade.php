<!DOCTYPE html>

<html lang="{{ app()->getLocale() }}" class="default-style layout-offcanvas layout-collapsed">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

    <title>{{ isset($title) ? $title.' - ' : '' }}Zahidur's Dashboard</title>

    <!-- Main font -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900" rel="stylesheet">

    <!-- Icons. Uncomment required icon fonts -->
    <link rel="stylesheet" href="{{ asset('/vendor/fonts/fontawesome.css') }}">
    <link rel="stylesheet" href="{{ asset('/vendor/fonts/ionicons.css') }}">
    <!-- Core stylesheets -->
    <link rel="stylesheet" href="{{ asset('/css/common.css') }}">
    <!-- Load polyfills -->
    <script src="{{ asset('/vendor/js/polyfills.js') }}"></script>
    <script>document['documentMode']===10&&document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.~locale.en"><\/script>')</script>
    <!-- Layout helpers -->
    <script src="{{ asset('/vendor/js/layout-helpers.js') }}"></script>

    <!-- `perfect-scrollbar` library required by SideNav plugin -->
    <link rel="stylesheet" href="{{ asset('/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}">
    <link rel="stylesheet" href="{{ asset('/vendor/libs/select2/select2.css') }}">

    <!-- Core scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    @yield('styles')
    <!-- Libs -->
    <link rel="stylesheet" href="{{ asset('/css/libs.css') }}"/>
    <!-- Application stylesheets -->
    <link rel="stylesheet" href="{{ asset('/css/application.css') }}">

</head>
<body>

    @yield('layout-content')
    <script src="{{ asset('js/core.js') }}"></script>
    <!-- `perfect-scrollbar` library required by SideNav plugin -->
    <script src="{{ asset('/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    <!-- Libs -->
    <script src="{{ asset('js/libs.js') }}"></script>
    <script>
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
    </script>
    <script type="text/javascript">
        @if(Session::has('message'))
            let type="{{Session::get('alert-type','notice')}}"
            switch(type)
            {
                case 'notice':
                    $.growl.notice({message: "{{ Session::get('message') }}", location: "tr"});
                    break;
                case 'error':
                    $.growl.error({message: "{{ Session::get('message') }}", location: "tr"});
                    break;
            }
        @endif
    </script>

    @yield('scripts')
    <!-- Application javascripts -->
    <script src="{{ asset('/js/application.js') }}"></script>

</body>
</html>
