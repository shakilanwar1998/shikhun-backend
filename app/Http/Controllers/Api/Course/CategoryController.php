<?php


namespace App\Http\Controllers\Api\Course;


use App\Http\Controllers\Controller;
use App\Services\Course\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public CategoryService $service;

    public function __construct(CategoryService $service)
    {
        $this->service = $service;
    }

    public function getCategories(Request $request)
    {
        return response($this->service->getAll());
    }
}
