<?php

namespace Database\Factories\Task;
use App\Enums\TaskStatusEnum;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Enums\TaskPriorityEnum;
use App\Models\Task\Task;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task\Task>
 */
class TaskFactory extends Factory
{
    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->name(),
            'description' => fake()->text(),
            'status' => fake()->randomElement(TaskStatusEnum::cases()),
            'priority' => fake()->randomElement(TaskPriorityEnum::cases()),
            'deadline' => fake()->dateTime(),
            'user_id' => User::factory(),
            'created_by' => User::factory(),
        ];
    }
}
