<?php

namespace App\Services;

use App\Structure\AbstractResourceService;
use App\Models\Category;

class CategoryService extends AbstractResourceService
{
    public const CREATED_SUCCESSFULLY = 'Category created successfully.';
    public const DELETED_SUCCESSFULLY = 'Category deleted successfully.';
    public const UPDATED_SUCCESSFULLY = 'Category updated successfully.';

    public function setModel(): string
    {
        return Category::class;
    }
}
