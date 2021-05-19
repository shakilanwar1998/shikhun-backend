<?php


namespace App\Interfaces;


interface Crud
{
    public function create($data);
    public function update($id,$data);
    public function delete($id);
    public function getAll();
}
