<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Task\Task;
use App\Models\User;
class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Task::factory()->count(100)->create()->each(function ($task) {
            $user = User::inRandomOrder()->first();
            $task->user()->associate($user);
            $task->createdBy()->associate($user);
            $task->save();
        });
    }
}
