<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\TopController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'basicauth'], function () {
    Route::fallback(function () {
        return redirect(route('web.top'));
    });

    Route::get('/', [TopController::class, 'index'])->name('web.top');
    Route::get('services', fn () => Inertia::render('Web/Services'))->name('web.services');
    Route::get('works', fn () => Inertia::render('Web/Works'))->name('web.works');
    Route::get('about', fn () => Inertia::render('Web/About'))->name('web.about');
    Route::get('contact', fn () => Inertia::render('Web/Contact'))->name('web.contact');
});
