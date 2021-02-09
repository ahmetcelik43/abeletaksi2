<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Layout extends Controller
{
    public function home()
    {
        return view('layout.home');
    }
    public function kampanya()
    {
        return view('layout.kampanya');
    }
}
