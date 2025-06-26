<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Make sure the user role exists
        $userRole = Role::firstOrCreate([
            'name' => 'user',
            'guard_name' => 'web'
        ]);

        // Create 50 users and assign user role to each
        User::factory(50)->create()->each(function ($user) use ($userRole) {
            $user->assignRole($userRole);
        });
    }
}
