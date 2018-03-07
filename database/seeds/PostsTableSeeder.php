<?php

use Illuminate\Database\Seeder;
use App\Post;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = \Faker\Factory::create();

      // Create 50 product records
      for ($i = 0; $i < 20; $i++) {
          Post::create([
              'title' => $faker->sentence,
              'body' => $faker->paragraph
          ]);
      }
    }
}
