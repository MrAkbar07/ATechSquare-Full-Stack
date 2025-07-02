<?php

namespace App\Services\User;
use App\Repositories\Contracts\UserRepositoryInterface;
class UserService
{
    protected $userRepository;
    /**
     * Create a new class instance.
     */
    public function __construct(UserRepositoryInterface $userRepositoryInterface)
    {
        $this->userRepository = $userRepositoryInterface;
    }

    // get all users
    public function getAll($args = [])
    {
        return $this->userRepository->getAll($args);
    }

    // get user by id
    public function find(int $id)
    {
        return $this->userRepository->find($id);
    }

    // get user by uuid
    public function findByUuid(string $uuid)
    {
        return $this->userRepository->findByUuid($uuid);
    }   

    // create user
    public function create(array $data)
    {
        return $this->userRepository->create($data);
    }

    // update user
    public function update(int $id, array $data)
    {
        return $this->userRepository->update($id, $data);
    }

    // delete user
    public function delete(int $id)
    {
        return $this->userRepository->delete($id);
    }
}
