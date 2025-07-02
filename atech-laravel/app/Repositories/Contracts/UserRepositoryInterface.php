<?php

namespace App\Repositories\Contracts;

interface UserRepositoryInterface
{
    // get all users
    public function getAll($args = []);

    // get user by id
    public function find(int $id);

    // get user by uuid
    public function findByUuid(string $uuid);

    // create user
    public function create(array $data);

    // update user
    public function update(int $id, array $data);

    // delete user
    public function delete(int $id);
    
}
