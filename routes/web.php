<?php

Route::get('/{any}', function () {
    return view('entrance');
})->where('any', '.*');
// Route::get('/', function () {
//     return view('home');
// });

// Route::get('blogs', 'BlogController@index');

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
