<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Task\Task;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Run role seeder first to create roles
        // $this->call(RoleSeeder::class);
        
        // // Then create users with roles
        // $this->call(UserSeeder::class);

        // // Create a test admin user
        // $adminUser = User::factory()->create([
        //     'name' => 'Admin User',
        //     'email' => 'admin@example.com',
        // ]);
        // $adminUser->assignRole('admin');

        // Create tasks
        $this->call(TaskSeeder::class);
    }
}
