<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Contracts\UserRepositoryInterface;
use App\Models\User;

class UserRepository implements UserRepositoryInterface
{
    protected $model;
    /**
     * Create a new class instance.
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    // get all users
    public function getAll($args = [])
    {
        $query = $this->model->query();

        if (!empty($args['search'])) {
            $query->where('name', 'like', '%' . $args['search'] . '%');
        }

        if(!empty($args['sort_order'])) {
            $query->orderBy('created_at', $args['sort_order']);
        }

        if(!empty($args['limit'])) {
            $query->limit($args['limit']);
        }
        
        if(!empty($args['offset'])) {
            $query->offset($args['offset']);
        }

        return $query;
    }

    // get user by id
    public function find(int $id)
    {
        return $this->model->find($id);
    }

    // get user by uuid
    public function findByUuid(string $uuid)
    {
        return $this->model->where('uuid', $uuid)->first();
    }

    // create user
    public function create(array $data)
    {
        return $this->model->create($data);
    }

    // update user
    public function update(int $id, array $data)
    {
        return $this->model->where('id', $id)->update($data);
    }

    // delete user
    public function delete(int $id)
    {
        return $this->model->where('id', $id)->delete();
    }
}
