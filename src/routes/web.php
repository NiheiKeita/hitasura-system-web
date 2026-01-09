<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\ImageController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Web\LoginController;
use App\Http\Controllers\Web\PasswordController;
use App\Http\Controllers\Web\TopController;
use App\Http\Middleware\VerifyCsrfToken;
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
    Route::get('process', fn () => Inertia::render('Web/Process'))->name('web.process');
    Route::get('pricing', fn () => Inertia::render('Web/Pricing'))->name('web.pricing');
    Route::get('about', fn () => Inertia::render('Web/About'))->name('web.about');
    Route::get('insights', fn () => Inertia::render('Web/Insights'))->name('web.insights');
    Route::get('contact', fn () => Inertia::render('Web/Contact'))->name('web.contact');
    Route::get('privacy', fn () => Inertia::render('Web/Privacy'))->name('web.privacy');

    Route::middleware('guest.web')->group(function () {
        Route::get('password/edit/{token}', [PasswordController::class, 'edit'])->name('web.password.edit');
        Route::post('password/edit/{token}', [PasswordController::class, 'update'])->name('web.password.update');
    });
    Route::get('login', [LoginController::class, 'create'])->name('user.login');
    Route::post('login', [LoginController::class, 'store']);


    //管理画面側
    Route::get('admin/login', [AdminLoginController::class, 'index'])->name('admin.login');
    Route::post('admin/login', [AdminLoginController::class, 'store'])->name('admin.login');
    Route::middleware('guest.admin')->group(function () {
        Route::get('admin/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard.index');

        Route::get('admin/admin_users', [AdminUserController::class, 'index'])->name('admin_user.list');
        Route::get('admin/admin_users/add', [AdminUserController::class, 'create'])->name('admin_user.create');
        Route::post('admin/admin_users/add', [AdminUserController::class, 'store'])->name('admin_user.store');

        Route::get('admin/users', [UserController::class, 'index'])->name('user.list');
        Route::get('admin/users/add', [UserController::class, 'create'])->name('user.create');
        Route::post('admin/users/add', [UserController::class, 'store'])->name('user.store');
        Route::get('admin/users/{id}', [UserController::class, 'edit'])->name('user.edit');
        Route::post('admin/users/{id}', [UserController::class, 'update'])->name('user.update');
    });

    // API
    Route::post('/api/upload', [ImageController::class, 'upload'])->withoutMiddleware(VerifyCsrfToken::class)->name('upload');
    Route::post('/api/upload/ma', [ImageController::class, 'maUpload'])->withoutMiddleware(VerifyCsrfToken::class)->name('upload.ma');
});
