<?php

// Route::get('/{any}', function () {
//     return view('home');
// })->where('any', '.*');
Route::get('/', function () {
    return view('home');
});

Route::get('blogs', 'BlogController@index');

// Route::get('/{any}', 'SpaController@index')->where('any', '.*');
// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
