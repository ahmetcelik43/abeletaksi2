@extends('layout.master')
@section('title', 'Kampanyalar')

@section('heaad')
<script src="{{ URL::asset('storage/js/kampanya.js') }}"></script>

@endsection

@section('content')
<div class="row">
    <div class="col-md-3 col-xs-10 card">
        <img class="card-img-top" src="/3.jpeg" alt="Card image cap">

        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">
                <p> Kampanya Başlık
                </p>

            </h6>
            <a href="#" class="card-link">
                <button class="btn btn-outline-success">Çekilişe Katıl</button>
            </a>
        </div>       
      </div>
    <div class="col-md-3 col-xs-10 card">
        <img class="card-img-top" src="/4.jpeg" alt="Card image cap">

        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">
                <p> Kampanya Başlık
                </p>

            </h6>
            <a href="#" class="card-link">
                <button class="btn btn-outline-success">Çekilişe Katıl</button>
            </a>
        </div>
    </div>
    <div class="col-md-3 col-xs-10 card">
        <img class="card-img-top" src="/5.jpeg" alt="Card image cap">

        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">
                <p> Kampanya Başlık
                </p>

            </h6>
            <a href="#" class="card-link">
                <button class="btn btn-outline-success">Çekilişe Katıl</button>
            </a>
        </div>
    </div>
    <div class="col-md-3 col-xs-10 card">
        <img class="card-img-top" src="/6.jpeg" alt="Card image cap">

        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">
                <p> Kampanya Başlık
                </p>

            </h6>
            <a href="#" class="card-link">
                <button class="btn btn-outline-success">Çekilişe Katıl</button>
            </a>
        </div>
    </div>

</div>
@endsection
