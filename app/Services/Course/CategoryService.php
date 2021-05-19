<?php


namespace App\Services\Course;

use App\Interfaces\Crud;
use App\Models\Course\Category;

class CategoryService implements Crud
{

    /**
     * @param $data
     * @return mixed
     */
    public function create($data)
    {
        // TODO: Implement create() method.
    }

    /**
     * @param $id
     * @param $data
     * @return mixed
     */
    public function update($id, $data)
    {
        // TODO: Implement update() method.
    }

    /**
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        // TODO: Implement delete() method.
    }

    /**
     * @return mixed
     */
    public function getAll()
    {
        return Category::all();
    }
}
