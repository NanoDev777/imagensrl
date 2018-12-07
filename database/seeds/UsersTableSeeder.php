<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
        	'name' => 'Nano',
            'email' => 'nano.fer777@gmail.com',
            'password' => bcrypt('nanolei'),
            'active' => 1
        ]);
    }
}
