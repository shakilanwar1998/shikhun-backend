<?php

namespace App\Structure;

abstract class AbstractResourceService
{
    public $model;

    abstract public function setModel() : string ;

    public function __construct()
    {
        $model = $this->setModel();
        $this->model = new $model;
    }

    /**
     * @param  $data [Array of attributes]
     * @return Model Instance
     */
    public function create(array $data)
    {
        return $this->model->create($data);
    }

    /**
     * @param $data array of arrays (of attributes)
     * @return Boolean
     */
    public function createMultiple(array $data)
    {
        return $this->model->insert($data);
    }

    /**
     * @param int primaryKey
     * @param array $select
     * @return Model Instance
     */
    public function find(int $primaryKey, array $select = ['*'])
    {
        return $this->model->select($select)->find($primaryKey);
    }

    /**
     * First row of the database table
     * @return Model Instance
     */
    public function first()
    {
        return $this->model->first();
    }

    /**
     * Last row of the database table
     * @return Model Instance
     */
    public function last()
    {
        return $this->model->last();
    }

    /**
     * Order by descend on column `created at`
     * @return Collection
     */
    public function latest()
    {
        return $this->model->latest();
    }

    /**
     * @return Model Collection
     */
    public function all()
    {
        return $this->model->all();
    }

    /**
     * @param  $data array
     * @param $key
     * @param string $column
     * @return Boolean
     */
    public function update(array $data, $key, string $column = 'id')
    {
        return $this->model->where($column, $key)->update($data);
    }

    /**
     * @param $id int
     * @return bool
     */
    public function delete(int $id)
    {
        return $this->model->delete($id);
    }

    public function updateByModel($model, array $data)
    {
        return $model->update($data);
    }

    /**
     * Order by column
     *
     * @param string $column
     * @param string $order
     * @return void
     */
    public function orderBy(string $column = 'created_at', string $order = 'ASC')
    {
        return $this->model->orderBy($column, $order);
    }

    public function orderByDesc(string $column = 'created_at')
    {
        return $this->model->orderBy($column, 'DESC');
    }

    public function with($relations)
    {
        return $this->model->with($relations);
    }

    public function paginate(int $paginate = 20)
    {
        return $this->model->paginate($paginate);
    }

    public function findBy($data, string $column = 'id')
    {
        return $this->model->where($column, $data)->first();
    }

    public function getFindBy($data, string $column = 'id')
    {
        return $this->model->where($column, $data)->get();
    }
}
