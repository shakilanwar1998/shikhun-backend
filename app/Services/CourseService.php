<?php

namespace App\Services;

use App\Structure\AbstractResourceService;
use App\Models\Course;

class CourseService extends AbstractResourceService
{
    public const CREATED_SUCCESSFULLY = 'Course created successfully.';
    public const DELETED_SUCCESSFULLY = 'Course deleted successfully.';
    public const UPDATED_SUCCESSFULLY = 'Course updated successfully.';

    public function setModel(): string
    {
        return Course::class;
    }
}
