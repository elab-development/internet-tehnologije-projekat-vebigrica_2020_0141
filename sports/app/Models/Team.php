<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'country',
        'city',
        'founded',
        'sport'
    ];

    public function players()
    {
        return $this->hasMany(Player::class);
    }

    public function coaches()
    {
        return $this->hasMany(Coach::class);
    }

    public static function getAllTeams()
    {
        $result = DB::table('teams')
            ->select(
                'name',
                'country',
                'city',
                'founded',
                'sport'
            )
            ->get()->toArray();
        return $result;
    }
}
