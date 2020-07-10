<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request){
        $name = $request->query('name', 'sin nombre');

        return view('dashboard', [
            'name' => $name
        ]);
    }
}
