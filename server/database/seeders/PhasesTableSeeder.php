<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Phase;

class PhasesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $phases = [
            '1a',
            '1b',
            '1c'
        ];

        foreach($phases as $phase){
            Phase::create([
                'name' => $phase,
            ]);
        }
    }
}
