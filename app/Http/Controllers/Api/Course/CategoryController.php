<?php


namespace App\Http\Controllers\Api\Course;


use App\Services\Course\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends \App\Http\Controllers\Controller
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
