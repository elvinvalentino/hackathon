<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('schedule_details')->nullable()->references('id')->on('schedule_details')->onDelete('cascade');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('age');
            $table->string('occupation');
            $table->string('nationality');
            $table->string('id_card')->unique();
            $table->longText('image');
            $table->string('status')->default('Pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
