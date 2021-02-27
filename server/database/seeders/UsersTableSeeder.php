<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admins = [
            'admin@gmail.com',
            'staff@gmail.com'
        ];

        foreach($admins as $admin){
            User::create([
                'name' => 'admin',
                'email' => $admin,
                'password' => bcrypt('123456'),
                'role_id' => Role::where('name','admin')->first()->id
            ]);
        }

        $users = [
            'satu@gmail.com',
            'dua@gmail.com',
            'tiga@gmail.com'
        ];

        foreach($users as $user){
            User::create([
                'name' => "hospital",
                'email' => $user,
                'password' => bcrypt('123456'),
                'role_id' => Role::where('name','organization')->first()->id
            ]);
        }
    }
}
