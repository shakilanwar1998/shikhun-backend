<?php

namespace App\Services;

use App\Structure\AbstractResourceService;
use App\Models\User;

class TeacherService extends AbstractResourceService
{
    public const CREATED_SUCCESSFULLY = 'Trainer created successfully.';
    public const DELETED_SUCCESSFULLY = 'Trainer deleted successfully.';
    public const UPDATED_SUCCESSFULLY = 'Trainer updated successfully.';

    public function setModel(): string
    {
        return User::class;
    }
}
